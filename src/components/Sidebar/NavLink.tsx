import { Icon, Link as ChakraLink, Text, LinkProps } from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends LinkProps{
    icon: ElementType;
    children: string;
    href: string;
    matchDerativePath?: boolean;
}

export default function NavLink({icon, children, href, matchDerativePath, ...rest}: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref matchDerativePath={matchDerativePath}>
        <ChakraLink display="flex" alignContent="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
            {children}
        </Text>
        </ChakraLink>
    </ActiveLink>
  );
}
