import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe({ recipe }) {
  return (
    <section className="text-gray-700 px-6 md:px-36 mt-10">
      <h2 className="text-3xl font-bold mb-6">Chef Claude Recommends:</h2>
      <div className="bg-white shadow-lg rounded-2xl p-6 text-gray-700 leading-7 text-lg font-normal">
        <ReactMarkdown
          components={{
            h3: ({ children, ...props }) => (
              <h3 className="text-2xl font-bold  my-4" {...props}>
                {children}
              </h3>
            ),
            h4: ({ children, ...props }) => (
              <h4 className="text-xl font-bold  my-3" {...props}>
                {children}
              </h4>
            ),
            p: ({ children, ...props }) => (
              <p className="leading-relaxed my-2" {...props}>
                {children}
              </p>
            ),
            ul: ({ children, ...props }) => ( 
                <ul className="list-disc my-4 ml-6" {...props}>    
                    {children}  
                </ul>
             ),
             ol: ({ children, ...props }) => ( 
                <ol className="list-decimal my-4 ml-6" {...props}>    
                    {children}  
                </ol>
             ),
            li: ({ children, ...props }) => (
              <li className="mb-2" {...props}>
                {children}
              </li>
            ),
          }}
        >
          {recipe}
        </ReactMarkdown>
      </div>
    </section>
  );
}
