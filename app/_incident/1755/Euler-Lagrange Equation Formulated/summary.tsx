import Latex from "react-latex-next";

export default function Summary() {
	return (
		<>
			The Euler-Lagrange equation was formulated by Leonhard Euler and Joseph-Louis Lagrange as part of the development of the calculus of
			variations. This equation provides a method for deriving the equations of motion for a system, based on a principle known as the principle
			of least action. In the context of classical mechanics, the Euler-Lagrange equation relates a system&apos;s Lagrangian (the difference
			between kinetic and potential energy) to the behavior of the system over time. The equation is given by:
			<Latex>{String.raw`$\frac{d}{dt}left(\frac{partial L}{partial dot{q}_i}\right) - \frac{partial L}{partial q_i} = 0$`}</Latex>
		</>
	);
}
