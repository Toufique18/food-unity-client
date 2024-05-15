
const GetInvolvedSection = () => {
    return (
        <section className="bg-purple-100 rounded-lg pt-16 px-3 pb-3 mt-4">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                        Get Involved
                    </h2>
                    <p className="text-lg text-gray-600">
                        Make a Difference Today!
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                    <div className="p-6 bg-white rounded-lg shadow-md hover:bg-purple-200">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Volunteer Your Time
                        </h3>
                        <p className="text-gray-600">
                            Join our volunteer team and help organize events, distribute food, or assist with community outreach efforts.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md hover:bg-purple-200">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Donate Surplus Food
                        </h3>
                        <p className="text-gray-600">
                            Have surplus food to spare? Donate it to those in need through our platform and make a positive impact in your community.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md hover:bg-purple-200">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Spread the Word
                        </h3>
                        <p className="text-gray-600">
                            Help raise awareness about food waste and hunger by sharing our platform on social media and encouraging others to get involved.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInvolvedSection;
