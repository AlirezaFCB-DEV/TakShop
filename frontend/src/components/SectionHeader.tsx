interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <section className="text-center">
      <section className="relative p-3">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-main-500">
          {title}
        </h2>
        <section className="absolute h-2 w-1/12 bg-main-500 -top-1 left-1/2 -translate-x-1/2 rounded-full" />
      </section>
      <p className="text-gray-300 text-base sm:text-lg lg:text-xl">
        {description}
      </p>
    </section>
  );
};

export default SectionHeader;
