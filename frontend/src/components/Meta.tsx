import React, { FunctionComponent } from "react";
import { Helmet } from "react-helmet";

interface IMeta {
  title: string;
  description?: string;
  keywords?: string;
}

const Meta: FunctionComponent<IMeta> = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>Amazon.com: {title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Amazon.com: Online Shopping for Electronics, Computers, ...",
  description: "We sell Electronics, Computers, Video Games",
  keywords: "Laptop, Computer,Fashion, buy shoes, cheap shoes",
};

export default Meta;
