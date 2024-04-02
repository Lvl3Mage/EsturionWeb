import Vector2 from './Vector2';
export default class EquationUtility{
	static LineLineIntersect(lineAStart, lineADir, lineBStart, lineBDir){
		let lineA = EquationUtility.CalcEquationParams(lineAStart, lineADir);
		let lineB = EquationUtility.CalcEquationParams(lineBStart, lineBDir);
		if(lineA == null || lineB == null){ // one line vertical

			if(lineA == null && lineB == null){ // both lines vertical
				if(lineAStart.Equal(lineBStart)){//coincidental
					return null;
				}
				else{ // parralel

					return false;
				}
			}

			let x = (lineA == null) ? lineAStart.x : lineBStart.x;
			let nonVerticalLine = (lineA == null) ? lineB : lineA
			let y = x*nonVerticalLine.m + nonVerticalLine.n;
			return new Vector2(x,y);
			
		}
		else{
			if(lineA.m == lineB.m){
				if(lineA.n == lineB.n){ // coincidental
					return null;
				}
				else{ // parralel
					return false;
				}
			}
			else{
				let x = (lineB.n-lineA.n)/(lineA.m-lineB.m);
				let y = x*lineA.m + lineA.n;
				return new Vector2(x,y);
			}

		}
	}
	static CalcEquationParams(lineStart, lineDir){
		if(lineDir.x == 0){ // vertical line
			return null;
		}
		let m = lineDir.y/lineDir.x;
		return {
			m: m,
			n: lineStart.y-(lineStart.x*m)
		};
	}
}