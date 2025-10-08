# ⚡ Infy React CLI

A lightweight and flexible command-line tool to **scaffold React components, hooks, pages, and providers** with ease — built by **Ivan Macabontoc**.

---

## 🚀 Features

* 🧱 Generate ready-to-use **React components, hooks, pages, and providers**
* 🗂 Supports nested folder paths (e.g., `ui/Button`)
* 🧩 Choose between **JS, JSX, TS, TSX** file extensions
* 🔍 Automatically detects duplicates and prevents overwriting
* 💬 Informative CLI feedback with colored logs
* ⚙️ Designed for modular extension — add your own generators easily

---

## 📦 Installation

```bash
npm install -g infy-react-cli
```

Or using **yarn**:

```bash
yarn global add infy-react-cli
```

---

## 🧰 Usage

### Generate a React Component

```bash
infy g component Button
```

Creates:

```
src/components/Button.jsx
```

### Generate with Nested Folder

```bash
infy g component ui/Button
```

Creates:

```
src/components/ui/Button.jsx
```

### Specify File Extension

```bash
infy g component Button -e tsx
```

Creates:

```
src/components/Button.tsx
```

### Other Generators

| Type        | Example Command               | Output Path                    |
| ----------- | ----------------------------- | ------------------------------ |
| `component` | `infy g component Card`       | `src/components/Card.jsx`      |
| `hook`      | `infy g hook useCounter`      | `src/hooks/useCounter.js`      |
| `page`      | `infy g page Home`            | `src/pages/Home.jsx`           |
| `provider`  | `infy g provider AppProvider` | `src/provider/AppProvider.jsx` |

---

## 🧩 Info Command

Show project and environment details:

```bash
infy info
```

Output example:

```
✨ Infy CLI Info
---------------------
CLI Version: 1.0.0
Node Version: v22.12.0
Current Directory: /Users/you/projects/my-app
Available Generators: component, hook, page, provider
Templates Path: /path/to/templates
```

---

## 🛠 Development Setup

Clone the repository:

```bash
git clone https://github.com/infinity-team/infy-react-cli.git
cd infy-react-cli
```

Link globally for local testing:

```bash
npm link
```

Then you can run:

```bash
infy g component Test
```

---

## 💡 Future Enhancements

* Add template customization (user-defined blueprints)
* Interactive prompts for config setup
* TypeScript CLI generation
* Integration with React frameworks (Next.js, Vite)

---

## 🧑‍💻 Author

**Infinity Team**

> Built with ❤️ for fast React development.

---

## 🪪 License

This project is licensed under the [MIT License](LICENSE).

---
