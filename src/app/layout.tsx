import { FooterComponent } from './components/footerComponent/footerComponent';
import { Menu } from './components/menu/Menu';
import Provider from './components/sessionProvider/sessionProvider';
import './global-css/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'nome do site aqui',
  description: 'Descrição do site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-BR'>
      <body className={inter.className}>
        <Provider>
          <Menu />

          {children}

          <footer>
            <FooterComponent />
          </footer>
        </Provider>
      </body>
    </html>
  );
}
