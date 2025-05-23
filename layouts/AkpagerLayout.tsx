"use client";
import { akpagerUtility } from "@/utility";
import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";
import Footer from "./Footer";
import Header from "./Header";

interface AkpagerLayoutProps {
  children: React.ReactNode;
  header?: number;
  footer?: number;
  bodyClass?: string;
  onePage?: boolean;
}

const AkpagerLayout = ({
  children,
  header,
  footer,
  bodyClass,
  onePage,
}: AkpagerLayoutProps) => {
  useEffect(() => {
    akpagerUtility.animation();
    akpagerUtility.fixedHeader();
  });

  useEffect(() => {
    niceSelect();
    document.querySelector("body").classList = bodyClass;
  }, []);

  return (
    <Fragment>
      <div className="page-wrapper">
        <Header header={header} onePage={onePage} />
        {children}
        <Footer footer={footer} />
      </div>
    </Fragment>
  );
};
export default AkpagerLayout;
