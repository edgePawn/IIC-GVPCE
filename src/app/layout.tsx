
import "./globals.css";
import Navbar from '../app/component/NavBar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="total" >
        <Navbar />
        {children}
      </body>
    </html>
  );
};
export default RootLayout;
