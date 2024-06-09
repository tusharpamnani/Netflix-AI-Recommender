<h1 align="center" style="font-weight: bold;">Netflix Movie Recommendation App 🎬</h1>

<p align="center">
<a href="#technologies">Technologies</a> •
<a href="#getting-started">Getting Started</a> •
<a href="#contributing">Contributing</a>
</p>

<p align="center">An AI-powered React Native application that provides personalized movie recommendations for Netflix users.</p>

<p align="center">
<a href="https://github.com/tusharpamnani/Netflix-AI-Recommender">📱 Visit this Project</a>
</p>

<h2 id="layout">🎨 Layout</h2>

<p align="center">
<img src="assets/screen2.jpeg" alt="Landing Page" width="400px">
<img src="assets/screen1.jpeg" alt="Movie Details" width="400px">
</p>

<h2 id="technologies">💻 Technologies</h2>

![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

<h2 id="getting-started">🚀 Getting Started</h2>

Here you will learn how to run the project locally.

<h3>Prerequisites</h3>

- [Node.js](https://nodejs.org/en/download/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Supabase Account](https://supabase.com/)
- [Docker](https://www.docker.com/get-started)

<h3>Cloning</h3>

Clone the repository:

```bash
git clone https://github.com/tusharpamnani/Netflix-AI-Recommender.git
cd Netflix-AI-Recommender
```

<h3>Installing Dependencies</h3>

Install the necessary dependencies:

```bash
npm install
```

<h3>Configuring the App</h3>

Create a `config.js` file in the root directory of the project by copying `config-example.js`:

```bash
cp config-example.js config.js
```

Edit `config.js` to include your Supabase credentials and other necessary configuration details:

```javascript
// config.js

export const SUPABASE_URL = 'https://your-supabase-url.supabase.co';
export const SUPABASE_ANON_KEY = 'your-supabase-anon-key';
```

<h3>Importing the Dataset</h3>

If you can download the Netflix movies dataset from Kaggle, import it into your Supabase database using the Supabase dashboard or CLI.

Alternatively, use the provided `movies.csv` file:

1. Go to the Supabase dashboard.
2. Select your project.
3. Navigate to the table where you want to import the data.
4. Use the import feature to upload `movies.csv`.

<h3>Running Supabase Locally with Docker</h3>

To work with the dataset locally, ensure Docker is installed and running. Then, start your local Supabase instance:

```bash
supabase start
```

<h3>Running the App</h3>

For iOS:

```bash
npx react-native run-ios
```

For Android:

```bash
npx react-native run-android
```

<h2 id="contributing">

<h2 id="contributing">📫 Contributing</h2>

Contributions are welcome! Follow the steps below to contribute:

1. **Fork the repository**:

    ```bash
    git clone https://github.com/tusharpamnani/Netflix-AI-Recommender.git
    ```

2. **Create a new branch**:

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. **Make your changes** following the project's coding conventions and guidelines.

4. **Commit your changes**:

    ```bash
    git commit -m "Add a brief message about the changes"
    ```

5. **Push to your branch**:

    ```bash
    git push origin feature/your-feature-name
    ```

6. **Open a Pull Request** explaining the changes you made. Include screenshots if there are any visual changes and wait for the review!

<h3>Documentation that might help</h3>

- [📝 How to create a Pull Request](https://www.atlassian.com/git/tutorials/making-a-pull-request)
- [💾 Commit pattern](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)

---

Thank you for using the Netflix Movie Recommendation App! We hope you enjoy your movie recommendations.

---