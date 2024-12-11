// Select all planets
const planets = document.querySelectorAll('.planet');

// Define orbit durations (in seconds)
const orbitDurations = {
    mercury: 4,
    venus: 8,
    earth: 12,
    mars: 18,
    jupiter: 25,
    saturn: 30,
    uranus: 35,
    neptune: 40,
};

// Animate each planet around its orbit
planets.forEach(planet => {
    const planetName = planet.classList[1]; // Get the planet name (e.g., "mercury")
    const duration = orbitDurations[planetName];

    // Set animation duration and keyframes
    planet.style.animation = `orbit ${duration}s linear infinite`;
});

// Add keyframes for orbit animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes orbit {
        from {
            transform: rotate(0deg) translateX(50%) rotate(0deg);
        }
        to {
            transform: rotate(360deg) translateX(50%) rotate(-360deg);
        }
    }
`, styleSheet.cssRules.length);
