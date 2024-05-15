
const PartnerOrganizations = () => {
  // Sample partner organizations data
  const partnerOrganizations = [
    {
      id: 1,
      name: "Local Food Bank",
      description:
        "The Local Food Bank is a key partner in our efforts to address food insecurity in the community. They provide logistical support and distribution networks to ensure surplus food reaches those in need.",
    },
    {
      id: 2,
      name: "Global Restaurant Chain",
      description:
        "The Global Restaurant Chain is committed to reducing food waste across its locations worldwide. Through our partnership, they donate excess food items and promote our platform to their customers.",
    },
    {
      id: 3,
      name: "Community Outreach Organization",
      description:
        "The Community Outreach Organization works closely with marginalized communities to provide access to nutritious food. Together, we organize food drives, community meals, and educational programs.",
    },
  ];

  return (
    <section className="bg-purple-100 rounded-lg pt-16 px-3 pb-3 mt-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 ">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            Partner Organizations
          </h2>
          <p className="text-lg text-gray-600">
            Collaborating for Impact
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnerOrganizations.map(partner => (
            <div key={partner.id} className="bg-white p-6 rounded-lg shadow-md hover:animate-pulse">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {partner.name}
              </h3>
              <p className="text-gray-600">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerOrganizations;
