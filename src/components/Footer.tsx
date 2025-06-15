const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 py-8 px-4 border-t">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {currentYear} Nixon Raja. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built with passion for data-driven insights and business analysis
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;