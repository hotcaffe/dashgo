import Link, {LinkProps} from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    matchDerativePath?: boolean;
}

export function ActiveLink({children, matchDerativePath, ...rest}: ActiveLinkProps) {
    const {asPath} = useRouter();

    const isActive = asPath === rest.href || asPath === rest.as ? true : false
    const derivativePath = (matchDerativePath && asPath.startsWith(String(rest.href))) ? true : false

    return (
        <Link {...rest}>
            {cloneElement(children, {
                color: (isActive || derivativePath) ? 'pink.400' : 'gray.50'
            })}
        </Link>
    )
}