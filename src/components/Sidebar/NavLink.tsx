import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import Link  from "next/link";
import ActiveLink from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
    iconNav: ElementType;
    children: string;
}

export default function NavLink({ iconNav, children, href, ...rest }: NavLinkProps) {
    return(
        <ActiveLink href={href} passHref>
            <ChakraLink display="flex" {...rest}>
                <Icon as={iconNav} fontSize="28" />
                <Text ml="4" fontWeight="bold">{children}</Text>
            </ChakraLink>
        </ActiveLink>
    )
}