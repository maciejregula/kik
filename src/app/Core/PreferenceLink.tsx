"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { setWorkshopCookie, type Workshop } from "./cookies";

interface PreferenceLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}
const PreferenceLink: React.FC<PreferenceLinkProps> = ({
  to,
  className,
  children,
}) => {
  const router = useRouter();
  const target = to.replace("/", "") as Workshop;
  return (
    <A
      href={to}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        setWorkshopCookie(target);
        router.push(to);
      }}
    >
      {children}
    </A>
  );
};

const A = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: #e9eefc;
  color: #0b0c10;
  text-decoration: none;
  font-weight: 700;
`;

export default PreferenceLink;
