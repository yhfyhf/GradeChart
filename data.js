﻿var myCourse = [  
	{ "time":"2011 Fall", "courseName":"军事理论", "courseType":"Required", "credit":2.0, "score":84.0 },
	{ "time":"2011 Fall", "courseName":"计算机文化基础", "courseType":"Required", "credit":2.0, "score":81.0 },
	{ "time":"2011 Fall", "courseName":"C语言程序设计", "courseType":"Required", "credit":3.0, "score":86.0 },
	{ "time":"2011 Fall", "courseName":"中国近现代史纲要", "courseType":"Required", "credit":2.0, "score":85.0 },
	{ "time":"2011 Fall", "courseName":"大学英语(一)", "courseType":"Required", "credit":4.0, "score":85.0 },
	{ "time":"2011 Fall", "courseName":"大学英语(二)", "courseType":"Required", "credit":4.0, "score":85.0 },
	{ "time":"2011 Fall", "courseName":"大学英语(三)", "courseType":"Required", "credit":4.0, "score":83.0 },
	{ "time":"2011 Fall", "courseName":"体育(一)", "courseType":"Required", "credit":1.0, "score":76.0 },
	{ "time":"2011 Fall", "courseName":"思想道德修养与法律基础", "courseType":"Required", "credit":3.0, "score":89.0 },
	{ "time":"2011 Fall", "courseName":"工程图学与计算机绘图", "courseType":"Required", "credit":3.0, "score":72.0 },
	{ "time":"2011 Fall", "courseName":"数学分析(含常微分方程)(一)", "courseType":"Required", "credit":6.0, "score":86.0 },
	{ "time":"2011 Fall", "courseName":"高等代数（含线性代数）", "courseType":"Required", "credit":4.0, "score":86.0 },
	{ "time":"2012 Spring", "courseName":"大学英语(四)", "courseType":"Required", "credit":4.0, "score":87.0 },
	{ "time":"2012 Spring", "courseName":"马克思主义基本原理", "courseType":"Required", "credit":3.0, "score":83.0 },
	{ "time":"2012 Spring", "courseName":"体育(二)", "courseType":"Required", "credit":1.0, "score":93.0 },
	{ "time":"2012 Spring", "courseName":"大学生心理健康教育", "courseType":"Required", "credit":1.0, "score":90.0 },
	{ "time":"2012 Spring", "courseName":"数学分析(含常微分方程)(二)", "courseType":"Required", "credit":6.0, "score":82.0 },
	{ "time":"2012 Spring", "courseName":"大学物理(一)", "courseType":"Required", "credit":3.5, "score":91.0 },
	{ "time":"2012 Spring", "courseName":"概率论与数理统计", "courseType":"Required", "credit":3.0, "score":93.0 },
	{ "time":"2012 Fall", "courseName":"Matlab语言", "courseType":"Elective", "credit":1.0, "score":94.0 },
	{ "time":"2012 Fall", "courseName":"高级英语(一)", "courseType":"Required", "credit":3.0, "score":74.0 },
	{ "time":"2012 Fall", "courseName":"高级口语", "courseType":"Limited", "credit":2.0, "score":89.0 },
	{ "time":"2012 Fall", "courseName":"毛泽东思想和中国特色社会主义理论体系概论", "courseType":"Required", "credit":6.0, "score":84.0 },
	{ "time":"2012 Fall", "courseName":"青年心理学", "courseType":"Limited", "credit":2.0, "score":95.0 },
	{ "time":"2012 Fall", "courseName":"体育(三)", "courseType":"Required", "credit":1.0, "score":90.0 },
	{ "time":"2012 Fall", "courseName":"电路分析基础", "courseType":"Required", "credit":4.5, "score":88.0 },
	{ "time":"2012 Fall", "courseName":"数学分析(含常微分方程)(三)", "courseType":"Required", "credit":2.0, "score":95.0 },
	{ "time":"2012 Fall", "courseName":"大学物理(二)", "courseType":"Required", "credit":4.5, "score":92.0 },
	{ "time":"2012 Fall", "courseName":"场论与复变函数", "courseType":"Required", "credit":3.0, "score":83.0 },
	{ "time":"2013 Spring", "courseName":"数学建模理论基础", "courseType":"Required", "credit":2.0, "score":93.0 },
	{ "time":"2013 Spring", "courseName":"公关礼仪", "courseType":"Limited", "credit":2.0, "score":88.0 },
	{ "time":"2013 Spring", "courseName":"体育(四)", "courseType":"Required", "credit":1.0, "score":92.0 },
	{ "time":"2013 Spring", "courseName":"信号与系统", "courseType":"Required", "credit":4.5, "score":98.0 },
	{ "time":"2013 Spring", "courseName":"电路、信号与系统实验", "courseType":"Required", "credit":1.0, "score":82.0 },
	{ "time":"2013 Spring", "courseName":"模拟电子技术基础", "courseType":"Required", "credit":4.0, "score":92.0 },
	{ "time":"2013 Spring", "courseName":"数字电路与逻辑设计", "courseType":"Required", "credit":3.0, "score":93.0 },
	{ "time":"2013 Fall", "courseName":"软件技术基础", "courseType":"Required", "credit":3.0, "score":95.0 },
	{ "time":"2013 Fall", "courseName":"随机信号分析", "courseType":"Required", "credit":3.0, "score":77.0 },
	{ "time":"2013 Fall", "courseName":"数学建模实验", "courseType":"Required", "credit":2.0, "score":95.0 },
	{ "time":"2013 Fall", "courseName":"数字电路与逻辑设计", "courseType":"Required", "credit":1.0, "score":93.0 },
	{ "time":"2013 Fall", "courseName":"计算方法", "courseType":"Limited", "credit":2.0, "score":97.0 },
	{ "time":"2013 Fall", "courseName":"电子产品创作设计", "courseType":"Elective", "credit":2.0, "score":90.0 },
	{ "time":"2013 Fall", "courseName":"传感器技术及应用", "courseType":"Elective", "credit":2.0, "score":88.0 },
	{ "time":"2013 Fall", "courseName":"新创企业融资与理财", "courseType":"Limited", "credit":2.0, "score":95.0 },
	{ "time":"2013 Fall", "courseName":"射频电路基础", "courseType":"Required", "credit":4.0, "score":86.0 },
	{ "time":"2013 Fall", "courseName":"电磁场与电磁波", "courseType":"Required", "credit":4.0, "score":80.0 },
	{ "time":"2013 Fall", "courseName":"微波技术虚拟实验", "courseType":"Required", "credit":2.0, "score":95.0 },
	{ "time":"2013 Fall", "courseName":"数据结构", "courseType":"Required", "credit":3.0, "score":98.0 },
	{ "time":"2013 Fall", "courseName":"微机原理与系统设计", "courseType":"Required", "credit":3.0, "score":97.0 }
];