function Card({ title, description, icon }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
      <div className="text-4xl text-orange-500 mb-5">{icon}</div>

      <h2 className="text-xl font-bold text-gray-900 mb-3">{title}</h2>

      <p className="text-gray-600 leading-7">{description}</p>
    </div>
  );
}

export default Card;
