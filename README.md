# Face Recognition App 🎯

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TensorFlow](https://img.shields.io/badge/TensorFlow.js-4.22.0-orange.svg)](https://www.tensorflow.org/js)
[![Particles.js](https://img.shields.io/badge/Particles.js-3.7.1-brightgreen.svg)](https://particles.js.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A sophisticated web application that leverages artificial intelligence to detect faces in images. Built with React and enhanced with beautiful particle-based interactive backgrounds, this app provides a seamless and engaging user experience.


## ✨ Features

- 🔍 **Smart Face Detection**: 
  - Upload any image URL
  - Advanced face detection algorithm
  - Multiple face detection support
  - Real-time face highlighting

- 🔐 **Secure User System**:
  - User authentication
  - Personal entry tracking
  - Secure password handling
  - Profile management

- 🎨 **Modern UI/UX**:
  - Interactive particle background
  - Responsive design
  - Animated components
  - Intuitive interface

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Modern web browser

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd FaceRecognition-frontEnd
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open automatically at [http://localhost:3000](http://localhost:3000)

## 📝 Usage Guide

1. **Account Creation**
   - Click "Register" on the homepage
   - Fill in your details
   - Verify your account

2. **Face Detection**
   - Sign in to your account
   - Find an image with faces (e.g., from Unsplash or any public URL)
   - Paste the image URL in the input field
   - Click "Detect"
   - Watch as the app highlights all detected faces!

3. **Track Your Progress**
   - View your entry count at the top
   - Each successful detection increases your score
   - Compare with other users

## 🔧 Technical Details

### Backend Integration
The app communicates with a secure backend at `https://facerec-server.onrender.com` for:
- User authentication & management
- Face detection processing
- Entry counting & statistics

### Key Dependencies
```json
{
  "react": "^18.2.0",
  "@tensorflow/tfjs": "^4.22.0",
  "react-tsparticles": "^2.12.2",
  "face-api.js": "^0.22.2",
  "tachyons": "^4.12.0"
}
```

### Available Scripts

| Command | Description |
|---------|------------|
| `npm start` | Start development server |
| `npm test` | Run test suite |
| `npm run build` | Create production build |
| `npm run eject` | Eject from Create React App |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [TensorFlow.js](https://www.tensorflow.org/js) for the face detection capabilities
- [Particles.js](https://particles.js.org/) for the beautiful interactive background
- [Tachyons](https://tachyons.io/) for the sleek styling

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the [Issues](issues) page
2. Create a new issue if needed
3. Provide detailed information about your problem

---
Made with ❤️ by [Your Name]
