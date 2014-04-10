function getData(course) {
	/* get TIME */
	function getTime(){
		var timeOption = document.getElementById("time");
		var time = timeOption.options[timeOption.selectedIndex].value;
		return time;
	}

	/* get courseName */
	function getCourseName(){
		var courseNameOption = document.getElementById("courseName");
		var courseName = courseNameOption.value;
		return courseName;
	}

	/* get courseType */
	function getCourseType(){
		var courseTypeOption = document.getElementsByName("identity");
		for(var i=0; i<courseTypeOption.length; i++)
			if (courseTypeOption[i].checked == true) 
				break;
		var courseType = courseTypeOption[i].value;
		return courseType;
	}

	/* get credit */
	function getCredit(){
		var creditOption = document.getElementById("credit");
		var credit = creditOption.value;
		return credit;
	}

	function getScore(){
		var scoreOption = document.getElementById("score");
		var score = scoreOption.value;
		return score;
	}

	function checkCredit(){
		var credit = getCredit();
		if( (credit>0) && (credit<=6) && (credit*2)==Math.floor(credit*2) )  //超出范围或不是以 ".0",".5" 结束
			return credit;
		else {
			alert("请输入正确的学分！"); 
			return 0;
		}
	}

	function checkScore(){
		var score = getScore();
		if( (score>0) && (score<=100) )
			return score;
		else{ 
			alert("请输入正确的分数！");
			return 0;
		}	
	}

	function jsonAppend(course, newCourse) {   // append the new json data to the current json data
        course = JSON.stringify(course);
        newCourse = "," + JSON.stringify(newCourse); 
        course = course.replace("]", newCourse + "]");
        course = course.replace("[,", "[");
        return JSON.parse(course);
    }

	function addToCourseList(a, b, c, d, e, course){
		var newCourse = { time: a, courseName: b, courseType: c, credit: d, score: e };
		return jsonAppend(course, newCourse);
	}



	function check(course){
		if ( checkCredit() && checkScore() ){
			var time = getTime();
			var courseName = getCourseName();	
			var courseType = getCourseType();
			var credit = checkCredit();
			var score = checkScore();
			addToClassList(time, courseName, courseType, credit, score);
 			return addToCourseList(time, courseName, courseType, credit, score, course); 
		}
		else 
			return course;
	}

	function charToNum(){
		course = check(course);
		for(var i=0; i<course.length; i++){
			course[i].credit = Number(course[i].credit);
			course[i].score = Number(course[i].score); 
		}
		return course;
	}

	function addToClassList(time, courseName, courseType, credit, score) {
		var courseList = document.getElementById("courseList");
		var newCourse = document.createElement("tr");
		newCourse.className = "list_row";
		courseList.appendChild(newCourse); 
		newCourse.innerHTML = "<td>" + time + "</td>"
							+ "<td>" + courseName + "</td>"
							+ "<td>" + courseType + "</td>"
							+ "<td>" + credit + "</td>"
							+ "<td>" + score + "</td>";
	}

	return charToNum();
}














