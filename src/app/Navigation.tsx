"use client";

import React from "react";
import Link from "next/link";
import {
  Row,
  Button
} from "@/once-ui/components";

export function Navigation() {
  return (
    <Row 
      position="fixed" 
      top="0" 
      fillWidth 
      horizontal="center" 
      zIndex={3}
      paddingY="20"
    >
      <Row gap="12">
        <Link href="/">
          <Button 
            label="Home" 
            variant="tertiary" 
            size="s" 
          />
        </Link>
        <Link href="/projects">
          <Button 
            label="Projects" 
            variant="tertiary" 
            size="s" 
          />
        </Link>
        <Link href="/about">
          <Button 
            label="About" 
            variant="tertiary" 
            size="s" 
          />
        </Link>
        <Link href="/contact">
          <Button 
            label="Contact" 
            variant="tertiary" 
            size="s" 
          />
        </Link>
      </Row>
    </Row>
  );
}