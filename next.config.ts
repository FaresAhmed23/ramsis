import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "unsplash.com",
				protocol: "https",
				port: "",
			},
			{
				hostname: "plus.unsplash.com",
				protocol: "https",
				port: "",
			},
			{
				hostname: "images.unsplash.com",
				protocol: "https",
				port: "",
			},
			{
				hostname: "media.istockphoto.com",
				protocol: "https",
				port: "",
			},
		],
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
