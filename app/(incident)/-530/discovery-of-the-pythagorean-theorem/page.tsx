import Latex from "react-latex-next";

export default function Page() {
	return (
		<>
			Pythagoras, an ancient Greek mathematician and philosopher, is credited with the discovery of the Pythagorean Theorem. This fundamental
			principle of geometry states that in a right triangle, the square of the hypotenuse is equal to the sum of the squares of the other two
			sides: <Latex>$a^2 + b^2 = c^2$</Latex> . Though evidence suggests the theorem was known to earlier civilizations like the Babylonians,
			Pythagoras and his school formally proved it and made it a cornerstone of mathematical thought.
		</>
	);
}
