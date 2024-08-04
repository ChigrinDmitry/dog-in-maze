import { forwardRef } from "react";

const Dog = forwardRef<HTMLDivElement>((_, ref) => <div ref={ref}>🐶</div>);

export default Dog;
