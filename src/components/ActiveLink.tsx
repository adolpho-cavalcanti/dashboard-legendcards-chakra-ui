import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    shouldMatchExactHref?: boolean;
}

export default function ActiveLink({ children, shouldMatchExactHref = false, ...rest }: ActiveLinkProps) {
    
    const { asPath } = useRouter();
    let isActive = false;

    if(!shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
        isActive = true;
    }

    return (
        <Link { ...rest }>
            {cloneElement(children, {
                color: isActive ? 'yellow.500' : 'gray.500'
            })}
        </Link>
    )
}