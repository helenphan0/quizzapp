$(document).ready(function() {
	$('.questions').hide();
	$('.progress').hide();
	var i = 1;
	var CorrectCount = parseInt($('.correct').html());
	var WrongCount = parseInt($('.wrong').html());
	$('#begin').click(function() {
		$('.begin').hide();
		$('.progress').show();
		$('.questions').show();
		$('#reset').hide();
		askQ(i);
	});

	$('#submit').click(function(){
	 	var y = $('input:checked');
	 	if (y.length === 1) {
			checkAns(y);
		}
		else {
			return false;
		};
	});

	$('#next').click(function(){
		if ($('.post-text').text() == '' && $('#submit:active')) {
			return false;
		};
			i += 1;
			$('.questionNum').text(i);
			askQ(i);
			$('#submit:submit').removeAttr("disabled");
			$('input:checked').prop('checked',false);
		if (i == 10) {
			$('#next').hide();
			$('#reset').show();
			return false;
		};		
	});

	$('#reset').click(function() {
		 location.reload();
	});

		function askQ(i) {
			$('.post-text').text('');
			$('.questiontitle').text(Questions[i]);
			$('#choice1').text(Choice1[i]);
			$('#choice2').text(Choice2[i]);
			$('#choice3').text(Choice3[i]);
			$('#choice4').text(Choice4[i]);
		};

		function checkAns(y) {
			y.siblings('.post-text').removeClass('correct-ans wrong-ans');
			if (y.val() == Answers[i]) {
				y.siblings('.post-text').addClass('correct-ans').text('Correct!');
				CorrectCount += 1;
				$('.correct').text(CorrectCount);
			}
			else {
				y.siblings('.post-text').addClass('wrong-ans').text('Wrong. See #' + Answers[i]);
				WrongCount += 1;
				$('.wrong').text(WrongCount);
			};
			$('#submit:submit').attr("disabled", true);
			event.preventDefault();	
		};


	var Questions = {
		1: "What is Miss Ives' greatest fear?",
		2: "Which of the following inspired Proteus' chosen name?",
		3: "What is the meaning behind Sembene's facial marks?",
		4: "Where do Miss Ives and Dorian first meet?",
		5: "Ethan teaches Miss Ives how to shoot in exchange for what?",
		6: "Who ultimately encourages the Doctor to pursue the bridge between the living and the unknown?",
		7: "Upon hearing about his wife's death, what is Sir Malcolm's initial concern?",
		8: "The Doctor enlists the assistance of Miss Ives for all but one of the following.",
		9: "What does Lucifer offer Miss Ives for her soul?",
		10: "What did deciphering Sir Gregory's relics reveal?",
	};

	var Choice1 = {
		1: "Lucifer.",
		2: "A serial killer.",
		3: "He was a slave trader.",
		4: "A garden.",
		5: "Protection spells.",
		6: "Sir Malcom.",
		7: "Should he shave his beard.",
		8: "Buying a dress.",
		9: "Everlasting youth.",
		10: "Miss Ives is Amunet.",
	};

	var Choice2 = {
		1: "Witches.",
		2: "A poet.",
		3: "He was a member of an African tribe.",
		4: "Sir Malcolm's estate.",
		5: "Dance lessons.",
		6: "Miss Ives.",
		7: "How did she die.",
		8: "Attend the ball.",
		9: "Power.",
		10: "Lucifer had a brother.",
	};

	var Choice3 = {
		1: "Dolls.",
		2: "The Bible.",
		3: "He was burned.",
		4: "A seance.",
		5: "Ammunition.",
		6: "Lily.",
		7: "Who killed her.",
		8: "Tea time.",
		9: "Immortality.",
		10: "Ethan's secret.",
	};

	var Choice4 = {
		1: "Scorpions.",
		2: "A doctor.",
		3: "He practiced voodoo.",
		4: "The Mariner's Inn.",
		5: "A secret.",
		6: "Van Helsing.",
		7: "If Evelyn could attend the funeral.",
		8: "Picking out ladies' undergarments.",
		9: "Happiness.",
		10: "Evelyn has entranced Sir Malcolm.",
	};

	var Answers = {
		1: 3,
		2: 2,
		3: 1,
		4: 3,
		5: 2,
		6: 4,
		7: 1,
		8: 2,
		9: 4,
		10: 2,
	};


})