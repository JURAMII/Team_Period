if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/Team_Period/sw.js', { scope: '/Team_Period/' })})}