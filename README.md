<p align="center">
    <img width="780" alt="Banner" src="https://github.com/user-attachments/assets/651ebe8a-977d-4340-aeea-c0c4764bb341" >
</p>
<p align="center">
  📊 A powerful, flexible data management solution with infinite scrolling capabilities. 🚀
</p>

## 🌟 Introduction
Struggling with slow, cumbersome data tables? **InfiniTable** improves how you manage large datasets in web apps! 📈💨

This project integrates endless scrolling with flexible data handling, so you can browse data smoothly and easily without dealing with pagination issues.

## 🦄 Features
- 🔄 Infinite scrolling using Intersection Observer API
- 📊 Dynamic data loading
- 🎨 Sleek, responsive design with Tailwind CSS
- 📥 Easily add new data to the table
- 📝 Sticky form validation
- 🚫 Error handling and more!

## 🛠️ Tech Stack
- **🧠 TypeScript** - For type-safe, robust code
- **⚛️ React** - UI library for building interactive interfaces
- **🎭 Intersection Observer API** - Efficient scrolling detection
- **💅 Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **📡 JSON Server** - Lightweight database for rapid prototyping

## 🏃‍♂️ Getting Started

### Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/mutasim77/infinite-table.git
   ```
2. Install dependencies
   ```
   cd infinite-table
   npm install ||  yarn install
   ```
3. Start the project
   ```
   make start
   ```
4. Open `http://localhost:5173` in your browser 🕸️

> [!IMPORTANT]
> I've removed the `concurrently` library and instead use a Makefile to run multiple processes. This approach reduces dependencies and provides more flexibility in our development workflow.

## 🔬 Understanding the Intersection Observer API
The [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) is a powerful tool that allows us to detect when an element enters or leaves the viewport. In this project, I use it to trigger data loading as the user scrolls:
```js
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  },
  { threshold: 1.0 }
);
```
This code creates an observer that watches for when "load more"(ref) element becomes fully visible, triggering the next page fetch when appropriate.

> [!NOTE]
> If you want to learn more about Intersection Observer in detail, I highly recommend watching [this video](https://www.youtube.com/watch?v=2IbRtjez6ag).

## 📸 Preview
<img width="1440" alt="Preview" src="https://github.com/user-attachments/assets/9dfc99f2-8d51-4ddc-9ef2-6466b167f84f">

## 🔮 Future Plans (TODO)
- 🔍 Implement search and filtering capabilities
- 🔧 Integrate _delete_ and _update_ features for enhanced data management
- 📋 Implement export functionality (e.g., CSV, Excel)

## 🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.
- Fork the Project
- Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
- Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the Branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request

## 📜 License
Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.

Built with ❤️ by [mutasim](https://www.mutasim.top/)
