
const CompanyLogos = ({ className  } : any) => {
  return (
    <div className={className}>
      <h5 className="tagline  text-center text-[#0E0C15]">
        
        Helping people create beautiful content at
      </h5>
      {/* <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default CompanyLogos;
