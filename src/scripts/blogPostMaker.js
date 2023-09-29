var fs = require('fs');


const adminButton = document.getElementById("blog-password-button");
const adminText = document.getElementById("blog-password");

const blog_editor = document.getElementById("maker");

const password = "takagi-san";

adminButton?.addEventListener('click', function() {
  	let adminText_value = adminText?.value;
  	if (adminText_value == password) {
		//console.log("dawg");
		blog_editor.style.display = "block";
  	}
});



// Blog Post saving part
const save_button = document.getElementById("blog-save-button");

const blog_filename = document.getElementById("blog-filename");

const post_content = document.getElementById("blog-content");

const leFilename = blog_filename?.value;
const leBlogPath = "../content/blog/";

function getLeData(file_path) {
	readFile(file_path, 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return null;
		}
		return data;
	});
}

save_button?.addEventListener('click', saveBlog);

function saveBlog() {
	console.log("Me Gusta");
	console.log(
		getLeData("./megusta.txt")
	);
}