# 📊 Spreadsheet UI Prototype

A pixel-perfect, front-end-only React prototype that mimics a Google Sheets–like experience, based on a Figma design.

> Designed as part of an internship design assignment to replicate a dynamic spreadsheet UI using modern frontend tools and techniques.

---

## 🔍 Live Preview

[🔗 Live Link Here](https://your-live-url.com)

---

## 🧩 Features

- Pixel-perfect layout based on [Figma Design](https://www.figma.com/design/3nywpu5sz45RrCmwe68QZP/Intern-Design-Assigment?node-id=2-2535&t=DJGGMt8I4fiZjoIB-1)
- Spreadsheet grid with editable cells
- Functional toolbar buttons (log to console)
- Tab view switching (e.g., Spreadsheet, Kanban)
- Tailwind-powered UI
- React Table integration for flexibility

---

## 🧱 Tech Stack

| Tech               | Purpose                        |
|--------------------|--------------------------------|
| **React 18**        | UI library                     |
| **Vite**            | Fast development build tool    |
| **TypeScript**      | Type safety and scalability    |
| **Tailwind CSS**    | Utility-first CSS styling      |
| **react-table**     | Dynamic, customizable tables   |
| **ESLint + Prettier** | Code quality and formatting |

---

## 🏗️ How It Was Built

1. **Setup with Vite + TypeScript** for fast, strict-mode TypeScript React development.
2. **Tailwind CSS** configured for styling via utility classes directly in JSX.
3. **Reusable components** like `Toolbar`, `Spreadsheet` ensure clean modular code.
4. **Custom SVG icons** used when Lucide icons didn't match Figma.
5. **React Table** manages dynamic column/cell rendering.
6. All interactions like buttons, tabs, and actions log to console for prototype validation.
7. Linting and formatting ensures consistent, error-free development.

---

## 📦 Installation & Running Locally

Clone the repository and start the dev server:

```bash
git clone https://github.com/your-username/spreadsheet-ui.git
cd spreadsheet-ui

# Install dependencies
npm install

# Run type-check and lint
npm run type-check
npm run lint

# Start local dev server
npm run dev
