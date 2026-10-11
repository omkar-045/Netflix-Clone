# 🎬 Netflix Clone

A modern, responsive Netflix-inspired streaming website built using HTML5, CSS3, JavaScript, jQuery, and Bootstrap. This project features an attractive dark-themed interface, interactive movie sliders, search functionality, category filtering, and a personalized My List watchlist.

![Project Status](https://img.shields.io/badge/Status-Active-brightgreen)
![Version](https://img.shields.io/badge/Version-2.0.0-orange)
![HTML5](https://img.shields.io/badge/HTML5-orange)
![CSS3](https://img.shields.io/badge/CSS3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow)
![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Features

### 🎥 Core Features

- **Responsive Design** – Works across desktop, tablet, and mobile screens.
- **Hero Slider** – Interactive featured movie and show carousel.
- **Movie Collections** – Browse favorites, trending movies, top picks, and shows.
- **Smooth Animations** – Attractive transitions and hover effects.
- **Search Functionality** – Search for movies and shows by title.
- **Category Filter** – Filter available movies by Action, Comedy, Horror, Drama, or view All.
- **My List / Watchlist** – Add movies to your personal saved list using the existing movie-card buttons.
- **Persistent Watchlist** – Saved movies remain available after refreshing the browser through localStorage.
- **Remove Saved Movies** – Remove individual movies from My List.
- **Movie Information** – Display movie posters, ratings, and duration where available.
- **Navigation Menus** – Interactive navigation, search, notification, and profile dropdowns.
- **Episode Selection** – Season dropdowns and episode-related content.
- **Trailer Links** – Access linked trailers for supported movies and shows.
- **Social Sharing** – Sharing options available in the interface.

### 🚀 Additional Improvements

- Interactive movie search results.
- Dynamic saved-movie count.
- Automatic My List section rendering.
- Add/remove state indicators on movie cards.
- Category filtering that works with supported movie sections.
- Browser-based storage for saved movies.
- Responsive movie cards and content layouts.

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript
- jQuery 3.4.1
- Bootstrap 4

### Libraries
- Slick Slider
- Owl Carousel
- Slick Animation
- Font Awesome
- Select2
- Magnific Popup
- Animate.css
- Flatpickr

### Browser Storage
- localStorage for saving the My List watchlist.

## 📂 Project Structure

```text
Netflix-Clone/
├── index.html
├── avng.html
├── main.js
├── style.css
├── README.md
├── css/
│   ├── bootstrap.min.css
│   ├── slick.css
│   ├── slick-theme.css
│   ├── owl.carousel.min.css
│   └── other stylesheets
├── js/
│   ├── jquery-3.4.1.min.js
│   ├── bootstrap.min.js
│   ├── slick.min.js
│   ├── owl.carousel.min.js
│   └── other libraries
├── images/
│   ├── episodes/
│   ├── favorite/
│   ├── footer/
│   ├── notify/
│   ├── popular/
│   ├── slider/
│   ├── suggested/
│   ├── top-10/
│   ├── trending/
│   └── user/
└── video/
```

*Note: The structure above represents the main project files and folders. Your repository may contain additional assets and libraries.*

## 🔍 Search and Category Filtering

### Search
- Search for movies and shows by title.
- Display matching results in a dedicated results section.
- Clear the search to return to the normal homepage.

### Categories
Available filters include:

- **All** – Display all supported movies.
- **Action** – Display mapped action titles.
- **Comedy** – Display mapped comedy titles.
- **Horror** – Display mapped horror titles.
- **Drama** – Display mapped drama titles.

The category filter uses a predefined movie-to-genre mapping, so only titles included in that mapping are assigned to a specific category.

## ❤️ My List / Watchlist

The My List feature lets users save movies they want to watch later.

### How It Works

1. Click the **+** icon on a movie card to add it to My List.
2. The saved movie appears in the My List section.
3. Click the saved movie's icon again to remove it.
4. Use the individual Remove button to delete a saved movie.
5. Refresh the browser to verify that saved movies persist.

The watchlist uses browser `localStorage`. Saved movies are stored in the current browser and are not automatically synchronized across different devices or browsers.

## 🚀 Getting Started

### Prerequisites

- A modern web browser such as Chrome, Firefox, Edge, or Safari.
- Visual Studio Code is recommended for development.
- Git installed if you want to clone the repository.

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/omkar-045/Netflix-Clone.git
```

**2. Open the project folder**

```bash
cd Netflix-Clone
```

**3. Run the website**

Open `index.html` in your browser, or use the Live Server extension in Visual Studio Code.

**4. Explore the features**

Browse movie collections, use search and category filters, and save movies to My List.

## 🌐 Live Demo

After enabling GitHub Pages, visit:

[Netflix Clone – Live Demo](https://omkar-045.github.io/Netflix-Clone/)

*The live demo link works once GitHub Pages has finished deployment and the website's asset paths are configured correctly.*

## 🎨 Design Highlights

- Netflix-inspired dark interface.
- Red accent colors.
- Movie poster hover effects.
- Smooth slider transitions.
- Responsive content layout.
- Interactive navigation and dropdown menus.
- Organized movie and show sections.

## 📱 Responsive Design

The interface is designed to support:

- Desktop screens.
- Laptops.
- Tablets.
- Mobile phones.

Responsive layouts and carousel settings help adapt the interface to different screen sizes.

## ⚙️ Customization

### Change the Theme

Edit `style.css` to customize colors, fonts, backgrounds, and animations.

### Add Movie Content

Update the appropriate movie-card HTML in `index.html`, including its title, poster, and related details.

### Modify JavaScript Functionality

Edit `main.js` to adjust sliders, search behavior, category filtering, and My List functionality.

## 🔮 Future Enhancements

- [ ] Backend integration.
- [ ] User authentication and profiles.
- [ ] Database integration for movies and users.
- [ ] Real video streaming functionality.
- [ ] Server-side watchlist synchronization.
- [ ] Advanced filters and sorting.
- [ ] Improved accessibility.
- [ ] Progressive Web App (PWA) support.

## 📌 Project Scope

This project is a frontend demonstration of a Netflix-inspired streaming platform. It focuses on responsive web design, JavaScript interactivity, UI components, and browser-based watchlist storage.

It does not currently represent a complete production streaming service with backend authentication, a streaming infrastructure, or a movie database.

## 👨‍💻 Author

**Omkar Salunkhe**

- GitHub: [@omkar-045](https://github.com/omkar-045)
- Project Repository: [Netflix-Clone](https://github.com/omkar-045/Netflix-Clone)

## 🙏 Acknowledgements

- Inspired by Netflix's streaming interface and user experience.
- Built using open-source frontend libraries and tools.
- Developed as a learning project to improve frontend development skills.

## 📄 License

This project is intended for educational and portfolio purposes. If you distribute it, ensure you have the rights to the included images, logos, and other third-party assets. Add a `LICENSE` file if you intend to publish the project under a specific open-source license.

---

**Created with ❤️ by Omkar Salunkhe**
