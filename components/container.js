/**
 * Function to define a Container.
 * @param {*} childrens of the component
 * @returns {React.Node}
 */
export default function Container({ children }) {
  return (
    <div className="mx-auto px-0 tablet:px-0 gap-10 laptop:px-8 py-8 laptop:mx-24">
      {children}
    </div>
  );
}
