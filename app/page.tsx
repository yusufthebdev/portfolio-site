"use client"

import React, { useState } from 'react';
import { ExternalLink, Github, Mail, Twitter } from 'lucide-react';

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "ERC20 Token + Staking dApp",
      description: "A decentralized application featuring a custom ERC20 token with staking functionality. Users can stake tokens and earn rewards over time.",
      tech: ["Solidity", "Hardhat", "Tailwind", "Ethers.js"],
      network: "Base Mainnet",
      demo: "https://candy-token-staking.vercel.app/",
      repo: "https://github.com/yusufthebdev/candy-token-staking",
      contracts: [
        { name: "CANDYToken", address: "Verified Contract", explorer: "https://basescan.org/address/0xf6682Cf868a238Adb318E88aC5cF1C3c8175dAc8" },
        { name: "CandyStaking", address: "Verified Contract", explorer: "https://basescan.org/address/0x2bd2799c621Cf25b02B4A6403736EA2374eAA431" }
      ]
    },
    {
      id: 2,
      title: "2-of-3 Multisig Wallet",
      description: "A secure multi-signature wallet requiring 2 out of 3 signers to approve transactions, providing enhanced security for asset management.",
      tech: ["Solidity", "Hardhat", "React", "Ethers.js"],
      network: "Base Mainnet",
      demo: "https://2of3multisigw.vercel.app/",
      repo: "https://github.com/yusufthebdev/2of3multisigw",
      contracts: [
        { name: "MultiSig", address: "Verified Contract", explorer: "https://basescan.org/address/0xfFDED859...E89e2120d" }
      ]
    },
    {
      id: 3,
      title: "Gaming NFT Marketplace",
      description: "A full-featured NFT marketplace tailored for gaming assets. Users can mint, buy, sell, and trade gaming NFTs with seamless UX.",
      tech: ["Solidity", "Hardhat", "React", "IPFS"],
      network: "Base Sepolia",
      demo: "https://nft-marketplace-gaming.vercel.app/",
      repo: "https://github.com/yusufthebdev/nft-marketplace",
      contracts: [
        { name: "NFTMarketplace", address: "Verified Contract", explorer: "https://sepolia.basescan.org/address/0x40D5B718...f3F2ef984" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium">
              Blockchain Developer
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Owoyemi Yusuf
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Blockchain developer building decentralized solutions on Base. 
              Passionate about smart contracts, DeFi, and Web3 innovation.
            </p>
            <div className="flex gap-4 pt-4">
              <a 
                href="mailto:yusufthebdev17@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-gray-200 rounded-lg transition-all transform hover:scale-105 font-medium"
              >
                <Mail size={20} />
                Contact Me
              </a>
              <a 
                href="https://github.com/yusufthebdev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all transform hover:scale-105 border border-white/20"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl"></div>
              <img 
                src="https://api.dicebear.com/7.x/lorelei/svg?seed=Owoyemi&backgroundColor=000000&flip=false"
                alt="Owoyemi Yusuf"
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white/30 shadow-2xl bg-white/5"
              />
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mt-12 justify-center md:justify-start">
          <a 
            href="https://x.com/yusufthebdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Twitter size={24} />
          </a>
          <a 
            href="mailto:yusufthebdev17@gmail.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail size={24} />
          </a>
          <a 
            href="https://github.com/yusufthebdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={24} />
          </a>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Solidity", icon: "◆" },
              { name: "Hardhat", icon: "⚒" },
              { name: "JavaScript", icon: "JS" },
              { name: "Tailwind CSS", icon: "🎨" },
              { name: "Ethers.js", icon: "⚡" },
              { name: "React.js", icon: "⚛" },
              { name: "IPFS", icon: "📦" },
              { name: "Vercel", icon: "▲" },
              { name: "Base", icon: "🔵" },
              { name: "Git", icon: "🔀" }
            ].map(tech => (
              <span 
                key={tech.name}
                className="px-4 py-2 bg-white/10 rounded-lg text-sm border border-white/20 flex items-center gap-2"
              >
                <span>{tech.icon}</span>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>
                <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20">
                  {project.network}
                </span>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-2 mb-4">
                {project.contracts.map((contract, idx) => (
                  <div key={idx} className="text-sm">
                    <span className="font-semibold text-gray-300">{contract.name}:</span>{' '}
                    <a 
                      href={contract.explorer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors hover:underline"
                    >
                      {contract.address}
                    </a>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-black hover:bg-gray-200 rounded-lg transition-all text-sm font-medium"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all text-sm border border-white/20"
                >
                  <Github size={16} />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 mt-20 border-t border-white/10">
        <div className="text-center text-gray-400">
          <p className="mb-2">Built with Next.js, Tailwind CSS, and deployed on Vercel</p>
          <p>© 2026 Owoyemi Yusuf. Building the decentralized future.</p>
        </div>
      </footer>
    </div>
  );
}