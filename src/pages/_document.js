const { Html, Head, Main, NextScript } = require("next/document");

const MyDoc = () => {
  return (
    <Html lang="en">
      <Head>
        <title>
            For my Valentine Crush
        </title>
      </Head>
      <body className="h-screen bg-gradient-to-b from-[#db2777] via-[#ef4444] to-[#f97316] flex items-center justify-center px-2 overflow-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDoc;
