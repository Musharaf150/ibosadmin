
export default function RootLayout({
    children
  }) {
    return (
      <main className=" w-full auth ">
          {children}
      </main>
    );
  }