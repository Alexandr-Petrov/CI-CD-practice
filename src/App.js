import React from 'react';

function App() {
  const version = process.env.APP_VERSION || '1.0.1';

  return (
    <div className="container">
      <header className="header">
        <h1>🚀 Демонстрация CI/CD Pipeline</h1>
        <p className="subtitle">React + Webpack + GitHub Actions</p>
        <div className="version-display">v{version}</div>
      </header>

      <main className="main-content">
        <div className="card">
          <h2>Добро пожаловать на практику CI/CD!</h2>
          <p>
            Это приложение демонстрирует полный CI/CD pipeline используя:
          </p>
          <ul className="tech-list">
            <li>⚛️ React для фронтенда</li>
            <li>📦 Webpack для сборки</li>
            <li>🔄 GitHub Actions для автоматизации</li>
            <li>📄 GitHub Pages для хостинга</li>
          </ul>
        </div>

        <div className="card info">
          <h3>Процесс Pipeline</h3>
          <div className="pipeline">
            <div className="stage">1. Отправка кода</div>
            <div className="arrow">→</div>
            <div className="stage">2. Запуск GitHub Actions</div>
            <div className="arrow">→</div>
            <div className="stage">3. Сборка с Webpack</div>
            <div className="arrow">→</div>
            <div className="stage">4. Развертывание на Pages</div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>Этот проект автоматически развертывается на GitHub Pages при каждом отправлении кода! 🎉</p>
      </footer>
    </div>
  );
}

export default App;
