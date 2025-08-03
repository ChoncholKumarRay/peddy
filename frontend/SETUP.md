# Setup Guide for Peddy React Application

## Prerequisites

Before running this React application, you need to install Node.js and npm.

### Installing Node.js

1. **Download Node.js**: Visit [https://nodejs.org/](https://nodejs.org/) and download the LTS version
2. **Install Node.js**: Run the installer and follow the installation wizard
3. **Verify Installation**: Open a new terminal and run:
   ```bash
   node --version
   npm --version
   ```

## Project Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```

## Project Structure

```
assignment-6/
├── public/
│   └── images/          # Static images
├── src/
│   ├── components/      # Vue.js components in JSX format
│   │   ├── Header.jsx
│   │   ├── Banner.jsx
│   │   ├── MainSection.jsx
│   │   ├── CategoryButton.jsx
│   │   ├── PetCard.jsx
│   │   ├── LikedPets.jsx
│   │   ├── Spinner.jsx
│   │   ├── PetDetailsModal.jsx
│   │   ├── AdoptionModal.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # Project documentation
```

## Features Implemented

### Vue.js Components in JSX Format
- **Header**: Navigation with responsive menu
- **Banner**: Hero section with call-to-action
- **MainSection**: Main content with categories and pets
- **CategoryButton**: Interactive category filters
- **PetCard**: Individual pet information cards
- **LikedPets**: Sidebar for saved pets
- **Spinner**: Loading indicator
- **PetDetailsModal**: Detailed pet information
- **AdoptionModal**: Adoption confirmation with countdown
- **Footer**: Contact information and links

### Key Functionality
- ✅ Category filtering
- ✅ Pet sorting by price
- ✅ Like/unlike pets
- ✅ Pet details modal
- ✅ Adoption process with countdown
- ✅ Responsive design
- ✅ Loading states
- ✅ Error handling

## API Integration

The application uses the following APIs:
- Categories: `https://openapi.programming-hero.com/api/peddy/categories`
- All Pets: `https://openapi.programming-hero.com/api/peddy/pets`
- Category Pets: `https://openapi.programming-hero.com/api/peddy/category/{category}`
- Pet Details: `https://openapi.programming-hero.com/api/peddy/pet/{petId}`

## Troubleshooting

### Common Issues

1. **Node.js not found**: Install Node.js from the official website
2. **Port already in use**: Change the port in `vite.config.js`
3. **API errors**: Check network connectivity and API availability
4. **Build errors**: Clear node_modules and reinstall dependencies

### Commands for Troubleshooting

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Start with different port
npm run dev -- --port 3001

# Build with verbose output
npm run build --verbose
```

## Development Notes

- All components follow Vue.js patterns but use React JSX syntax
- State management uses React hooks (useState, useEffect)
- Styling uses Tailwind CSS with DaisyUI components
- Images are served from the public directory
- The application is fully responsive and mobile-friendly 