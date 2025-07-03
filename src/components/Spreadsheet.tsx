import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import { Globe, User, Link, ListChecks, FileText, ShieldCheck, ArchiveRestore } from 'lucide-react'

type RowData = {
  job: string
  submitted: string
  status: string
  submitter: string
  url: string
  assigned: string
  priority: string
  due: string
  value: number
}

const statusStyles = {
  'In-process': 'bg-yellow-100 text-yellow-800',
  'Complete': 'bg-green-100 text-green-700',
  'Blocked': 'bg-red-100 text-red-700',
  'Need to start': 'bg-blue-100 text-blue-700',
}

const priorityStyles = {
  High: 'text-red-600 font-medium',
  Medium: 'text-yellow-600 font-medium',
  Low: 'text-blue-600 font-medium',
}

const groupColorMap: Record<string, string> = {
  'Q3 Financial Overview': 'bg-gray-100',
  ABC: 'bg-green-100',
  'Answer a question': 'bg-purple-100',
  Extract: 'bg-orange-100',
  '': 'bg-white',
}

const headerIcons: Record<string, JSX.Element> = {
  '#': <ListChecks size={14} className="inline-block mr-1 text-gray-400" />,
  'Job Request': <FileText size={14} className="inline-block mr-1 text-gray-500" />,
  'Submitted': <ArchiveRestore size={14} className="inline-block mr-1 text-gray-500" />,
  'Status': <ShieldCheck size={14} className="inline-block mr-1 text-gray-500" />,
  'Submitter': <User size={14} className="inline-block mr-1 text-gray-500" />,
  'URL': <Globe size={14} className="inline-block mr-1 text-gray-500" />,
  'Assigned': <User size={14} className="inline-block mr-1 text-gray-500" />,
  'Priority': <ShieldCheck size={14} className="inline-block mr-1 text-gray-500" />,
  'Due Date': <ArchiveRestore size={14} className="inline-block mr-1 text-gray-500" />,
  'Est. Value': <FileText size={14} className="inline-block mr-1 text-gray-500" />,
}

export default function Spreadsheet({ data }: { data: RowData[] }) {
  const emptyRows = Array.from({ length: 20 }, () => ({
    job: '',
    submitted: '',
    status: '',
    submitter: '',
    url: '',
    assigned: '',
    priority: '',
    due: '',
    value: 0,
  }))

  const fullData = [...data, ...emptyRows]

  const columns = useMemo(
    () => [
      {
        Header: ' ',
        columns: [
          {
            Header: '#',
            accessor: (row: any, i: number) => i + 1,
            id: 'rowIndex',
            Cell: ({ row }: any) => (
              <span className="text-gray-500 text-sm text-center block w-full">{row.index + 1}</span>
            ),
          },
        ],
      },
      {
        Header: 'Q3 Financial Overview',
        columns: [
          {
            Header: 'Job Request',
            accessor: 'job',
            Cell: ({ value }: any) => (
              <span className="truncate block max-w-[200px]">{value}</span>
            ),
          },
          { Header: 'Submitted', accessor: 'submitted', id: 'submitted' },
          {
            Header: 'Status',
            accessor: 'status',
            Cell: ({ value }: any) =>
              value ? (
                <span className={`px-2 py-1 rounded text-xs font-medium ${statusStyles[value]}`}>
                  {value}
                </span>
              ) : null,
          },
          { Header: 'Submitter', accessor: 'submitter', id: 'submitter' },
        ],
      },
      {
        Header: 'ABC',
        columns: [
          {
            Header: 'URL',
            accessor: 'url',
            Cell: ({ value }: any) =>
              value ? (
                <a
                  href={`https://${value}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline text-sm truncate block max-w-[160px]"
                >
                  {value}
                </a>
              ) : null,
          },
          { Header: 'Assigned', accessor: 'assigned', id: 'assigned' },
        ],
      },
      {
        Header: 'Answer a question',
        columns: [
          {
            Header: 'Priority',
            accessor: 'priority',
            Cell: ({ value }: any) =>
              value ? (
                <span className={`${priorityStyles[value]}`}>{value}</span>
              ) : null,
          },
          { Header: 'Due Date', accessor: 'due', id: 'due' },
        ],
      },
      {
        Header: 'Extract',
        columns: [
          {
            Header: 'Est. Value',
            accessor: 'value',
            Cell: ({ value }: any) => (value ? `₹ ${value.toLocaleString('en-IN')}` : ''),
          },
        ],
      },
      {
        Header: '+',
        id: 'add-column-group',
        columns: [
          {
            Header: '',
            id: 'add-column',
            Cell: () => (
              <div className="flex justify-center">
                <button
                  onClick={() => console.log('Add new column')}
                  className="text-gray-400 hover:text-black text-xl"
                >
                  
                </button>
              </div>
            ),
          },
        ],
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: fullData })

  return (
    <div className="overflow-auto border rounded text-sm">
      <table
        {...getTableProps()}
        className="min-w-full table-auto border-separate border-spacing-0"
      >
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => {
                const groupColor = groupColorMap[column.Header as string] || 'bg-white'
                const icon = headerIcons[column.Header as string] || null
                return (
                  <th
                    {...column.getHeaderProps()}
                    className={`text-left px-3 py-2 border-b border-r font-semibold text-sm 
                      ${groupColor} 
                      ${['job', 'rowIndex'].includes(column.id) ? 'sticky left-0 z-10 bg-white' : ''}`}
                    colSpan={column.columns ? column.columns.length : 1}
                  >
                    <span className="flex items-center gap-1">
                      {icon}
                      {column.render('Header')}
                      
                    </span>
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr
                {...row.getRowProps()}
                className={`hover:bg-gray-50 ${!row.original.job ? 'text-gray-300 italic' : ''}`}
              >
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    className={`px-3 py-2 border-b border-r whitespace-nowrap 
                      ${['job', 'rowIndex'].includes(cell.column.id) ? 'sticky left-0 bg-white z-0' : ''}`}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={999} className="text-right px-4 py-2">
              <button
                onClick={() => console.log('Add column')}
                className="text-blue-600 hover:underline text-sm"
              >
                + Add Column
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
