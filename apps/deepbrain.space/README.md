# DeepBrain.Space Website

A modern, responsive website for DeepBrain.Space, showcasing AI Voice Agents for businesses. Built with Next.js, TypeScript, and TailwindCSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 16.x or later
- pnpm (Install globally with `npm install -g pnpm`)

### Initial Setup

1. Clone the repository

   ```bash
   git clone https://github.com/your-username/deepbrain-space.git
   cd deepbrain-space
   ```

2. Install dependencies

   ```bash
   pnpm install
   ```

3. Create required directories and files

   ```bash
   mkdir -p public/images/testimonials
   mkdir -p src/styles
   ```

4. Add placeholder images for testimonials
   - Add placeholder images to: `public/images/testimonials/john.jpg`
   - Add placeholder images to: `public/images/testimonials/sarah.jpg`
   - Add placeholder video to: `public/videos/ai-background.mp4`

5. Start the development server

   ```bash
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
deepbrain-space/
├── public/
│   ├── images/
│   │   └── testimonials/    # Testimonial images
│   └── videos/             # Video assets
├── src/
│   ├── components/         # React components
│   ├── pages/             # Next.js pages
│   ├── styles/            # Global styles
│   └── types/             # TypeScript types
└── config files           # Various configuration files
```

## 🛠 Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm clean` - Clean build cache

### Key Features

- Responsive design
- Modern UI with animations
- TypeScript support
- TailwindCSS styling
- Component-based architecture
- Form handling
- Video integration

## 🚀 Deployment

### Deploying to Vercel

1. Push your code to GitHub
2. Import your project in Vercel
3. Configure build settings:
   - Build Command: `pnpm build`
   - Output Directory: `.next`
   - Install Command: `pnpm install`

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🧪 Testing

Coming soon...

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
