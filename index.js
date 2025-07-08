#!/usr/bin/env node

// Function to create animated gradient effect
function createAnimatedGradientArt() {
    const art = [
        "  ⢀⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆",
        "⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿",
        "⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀",
        "⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀",
        "⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉"
    ];

    // Crazy Shrek-inspired color palette with greens AND purples!
    const colors = [
        '\x1b[38;5;22m',  // Dark forest green
        '\x1b[38;5;28m',  // Deep green
        '\x1b[38;5;34m',  // Forest green
        '\x1b[38;5;40m',  // Shrek green
        '\x1b[38;5;46m',  // Bright green
        '\x1b[38;5;82m',  // Lime green
        '\x1b[38;5;118m', // Light green
        '\x1b[38;5;154m', // Yellow-green
        '\x1b[38;5;190m', // Light yellow-green
        '\x1b[38;5;226m', // Yellow
        '\x1b[38;5;220m', // Golden yellow
        '\x1b[38;5;214m', // Orange-yellow
        '\x1b[38;5;208m', // Orange
        '\x1b[38;5;202m', // Red-orange
        '\x1b[38;5;196m', // Red
        '\x1b[38;5;160m', // Dark red
        '\x1b[38;5;129m', // Purple-magenta
        '\x1b[38;5;165m', // Magenta
        '\x1b[38;5;201m', // Bright magenta
        '\x1b[38;5;207m', // Pink-magenta
        '\x1b[38;5;213m', // Pink
        '\x1b[38;5;219m', // Light pink
        '\x1b[38;5;225m', // Very light pink
        '\x1b[38;5;93m',  // Purple
        '\x1b[38;5;99m',  // Medium purple
        '\x1b[38;5;105m', // Light purple
        '\x1b[38;5;141m', // Violet
        '\x1b[38;5;177m', // Lavender
        '\x1b[38;5;183m', // Light lavender
        '\x1b[38;5;57m',  // Blue-purple
        '\x1b[38;5;63m',  // Purple-blue
        '\x1b[38;5;69m',  // Slate blue
        '\x1b[38;5;75m',  // Sky purple
        '\x1b[38;5;81m',  // Cyan-purple
        '\x1b[38;5;87m',  // Bright cyan
        '\x1b[38;5;35m'   // Sea green
    ];

    const reset = '\x1b[0m';
    const clearScreen = '\x1b[2J\x1b[H';
    
    let frame = 0;
    
    function renderFrame() {
        process.stdout.write(clearScreen);
        
        console.log(); // Empty line for spacing
        
        art.forEach((line, index) => {
            // Create a wave effect by shifting the color based on time and position
            const waveOffset = Math.sin((frame * 0.1) + (index * 0.3)) * 8;
            const timeOffset = (frame * 0.5) % colors.length;
            
            // Calculate color index with wave and time animation
            let colorIndex = Math.floor(
                ((index / (art.length - 1)) * (colors.length - 1)) + 
                waveOffset + 
                timeOffset
            ) % colors.length;
            
            // Ensure colorIndex is within bounds
            colorIndex = Math.max(0, Math.min(colors.length - 1, colorIndex));
            
            console.log(colors[colorIndex] + line + reset);
        });
        
        console.log(); // Empty line for spacing
        console.log('\x1b[90mPress Ctrl+C to exit...\x1b[0m');
        
        frame++;
    }
    
    // Start the animation
    console.log('\x1b[?25l'); // Hide cursor
    
    const interval = setInterval(renderFrame, 150); // Update every 150ms
    
    // Handle Ctrl+C gracefully
    process.on('SIGINT', () => {
        clearInterval(interval);
        console.log('\x1b[?25h'); // Show cursor
        console.log('\n\nAnimation stopped. Goodbye! 👋');
        process.exit(0);
    });
}

// Add a simple static version function too
function createStaticGradientArt() {
    const art = [
        "  ⢀⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆",
        "⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿",
        "⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀",
        "⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀",
        "⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀",
        "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉"
    ];

    const colors = [
        '\x1b[38;5;22m',  // Dark forest green
        '\x1b[38;5;28m',  // Deep green
        '\x1b[38;5;34m',  // Forest green
        '\x1b[38;5;40m',  // Shrek green
        '\x1b[38;5;46m',  // Bright green
        '\x1b[38;5;82m',  // Lime green
        '\x1b[38;5;118m', // Light green
        '\x1b[38;5;154m', // Yellow-green
        '\x1b[38;5;190m', // Light yellow-green
        '\x1b[38;5;226m', // Yellow
        '\x1b[38;5;220m', // Golden yellow
        '\x1b[38;5;214m', // Orange-yellow
        '\x1b[38;5;208m', // Orange
        '\x1b[38;5;202m', // Red-orange
        '\x1b[38;5;196m', // Red
        '\x1b[38;5;129m', // Purple-magenta
        '\x1b[38;5;165m', // Magenta
        '\x1b[38;5;201m', // Bright magenta
        '\x1b[38;5;93m',  // Purple
        '\x1b[38;5;99m',  // Medium purple
        '\x1b[38;5;105m', // Light purple
        '\x1b[38;5;141m', // Violet
        '\x1b[38;5;57m'   // Blue-purple
    ];

    const reset = '\x1b[0m';

    console.log(); // Empty line for spacing
    
    art.forEach((line, index) => {
        const colorIndex = Math.floor((index / (art.length - 1)) * (colors.length - 1));
        console.log(colors[colorIndex] + line + reset);
    });
    
    console.log(); // Empty line for spacing
}

// Check command line arguments
const args = process.argv.slice(2);
if (args.includes('--static') || args.includes('-s')) {
    createStaticGradientArt();
} else {
    createAnimatedGradientArt();
}
