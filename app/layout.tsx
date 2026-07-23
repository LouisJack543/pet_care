import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "沐爪宠物洗护 | 温柔洗护与造型护理",
  description: "沐爪宠物洗护提供宠物洗澡、精修造型、皮毛护理、除味护理与上门接送预约服务。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
