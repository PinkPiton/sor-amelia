"use client";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import Link from "next/link";
import React from "react";

export const Navigation = () => {
  return (
    <Navbar isBordered>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand className="mr-4">
          <p className="hidden sm:block font-bold text-inherit">H/W</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="/">
            История одежды
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="/bomibilia_gadza_in_palestina">
            Bombardilo?
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
