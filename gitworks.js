


var gitapi = {
	
	version		: "2.0.0",
	description	: "syntax based v2.0.0, but tested v1.7.1",
	
	worklines	: [



/*
		{
			  description : "save from working directory to remote repository"
			, works : [
				{
					  description : "staging"
					, l : "st c"
					, r : "wd c arrow"
					, usages : [
						{
							  description : "normal usage"
							, usage : "stash apply [<stash>]"
							, link  : ""
						}, {
							  description : ""
							, usage : "stash pop"
							, link  : ""
						}
					]
				} , {
					  description : ""
					, l : "wd c"
					, r : "sa c arrow"
					, usages : [
						{
							  description : ""
							, usage : "add ..."
							, link  : "http://ninano.ga/git-1.7.1-help/git-add.html"
						}
					]
				} , {
					  description : ""
					, l : "sa c"
					, r : "lr c arrow"
					, usages : [
						{
							  description : ""
							, usage : "commit -m 'msg'"
							, link  : ""
						}
					]
				} , {
					  description : ""
					, l : "lr c"
					, r : "rr c arrow"
					, usages : [
						{
							  description : ""
							, usage : "push"
							, link  : ""
						}
					]
				}
			]
		}, {
			  description : ""
			, works : [
				{
					  description : ""
					, l : "st l"
					, r : "st r"
					, usages : [
						{
							  description : ""
							, usage : "stash list"
							, link  : ""
						}
					]
				} , {
					  description : ""
					, l : "wd c arrow"
					, r : "rr c"
					, usages : [
						{
							  description : ""
							, usage : "clone ..."
							, link  : ""
						}
					]
				}
			]
		},
*/













{ description : "", works : [
{ l: "st l", r: "lr r", type: "safe", usages: [ { usage: "init [--shared]" } ] },
{ l: "rr l", r: "rr r", type: "safe", usages: [ { usage: "init [--bare] [--shared]" } ] },
]},
{ description : "", works : [
{ l: "lr l", r: "lr r", type: "info", usages: [ { usage: "remote [-v]" } ] },
]},
{ description : "", works : [
{ l: "lr c", r: "rr c", type: "info", usages: [ { usage: "remote show <remote>" }, { usage: "ls-remote  [<remote>]" } ] },
]},
{ description : "", works : [
{ l: "lr l", r: "lr r", type: "meta", usages: [ { usage: "remote add <name> <url>" }, { usage: "remote rename <old name> <new name>" }, { usage: "remote remove <name>" } ] },
]},
{ description : "", works : [
{ l: "wd l arrow", r: "rr c", type: "safe", usages: [ { usage: "clone [-o <new remote name>] <remote> [<new directory name>]" } ] },
]},
{ description : "", works : [
{ l: "lr l arrow", r: "rr c", type: "safe", usages: [ { usage: "fetch --all" }, { usage: "fetch [<remote> [<upstream branch>[:<local branch>]]]" } ] },
]},
{ description : "", works : [
{ l: "wd l arrow", r: "lr c", type: "soft", usages: [ { usage: "checkout -b <tracking branch> <remote>/<upstream branch>" }, { usage: "checkout  [--track]           <remote>/<upstream branch>" } ] },
]},
{ description : "", works : [
{ l: "wd l arrow", r: "lr r", type: "soft", usages: [ { usage: "merge <remote>/<upstream branch>" } ] },
]},
{ description : "", works : [
{ l: "wd l arrow", r: "rr c", type: "soft", usages: [ { usage: "pull [--rebase] [<remote> [<upstream branch>[:<tracking branch>]]]" } ] },
]},
{ description : "", works : [
{ l: "wd l", r: "lr r", type: "info", usages: [ { usage: "show <object of blob, tree, tag and commit>…​" } ] },
]},
{ description : "", works : [
{ l: "lr l", r: "lr r", type: "info", usages: [ { usage: "reflog" }, { usage: "log -g" } ] },
]},
{ description : "", works : [
{ l: "st l", r: "st r", type: "info", usages: [ { usage: "stash list" }, { usage: "stash show [<stash>]" } ] },
{ l: "wd c", r: "sa c", type: "info", usages: [ { usage: "status [-s|--short]" } ] },
{ l: "lr l", r: "lr r", type: "info", usages: [ { usage: "log [-p] [-<show-limit>] [--all] [--no-merges] [--graph] [--decorate] [--stat|--name-status] [--abbrev-commit] [--relative-date] [--pretty=(oneline|format:'<format>'] [--author=<name>] [--committer=<name>] [--since=<time>] [--until=<time>] [--grep=<commit-text>] [-S<search-text>] [<path>…]" } ] },
]},
{ description : "", works : [
{ l: "lr l", r: "lr r", type: "info", usages: [ { usage: "diff <commit> <commit>" } ] },
]},
{ description : "", works : [
{ l: "wd c", r: "sa c", type: "info", usages: [ { usage: "diff" } ] },
{ l: "sa c", r: "lr c", type: "info", usages: [ { usage: "diff --cached [<commit>]" } ] },
]},
{ description : "", works : [
{ l: "wd c", r: "lr c", type: "info", usages: [ { usage: "diff <commit or branch>" } ] },
]},
{ description : "", works : [
{ l: "st l arrow", r: "sa r", type: "soft", usages: [ { usage: "stash save    [-u|-a] [<msg>]" } ] },
]},
{ description : "", works : [
{ l: "st l arrow", r: "wd r", type: "soft", usages: [ { usage: "stash save -k [-u|-a] [<msg>]" } ] },
]},
{ description : "", works : [
{ l: "st l", r: "wd r arrow", type: "soft", usages: [ { usage: "stash pop         [<stash>]" } ] },
]},
{ description : "", works : [
{ l: "st l", r: "sa r arrow", type: "soft", usages: [ { usage: "stash pop --index [<stash>]" } ] },
]},
{ description : "", works : [
{ l: "st c", r: "wd r arrow", type: "soft", usages: [ { usage: "stash apply         [<stash>]" } ] },
]},
{ description : "", works : [
{ l: "st c", r: "sa r arrow", type: "soft", usages: [ { usage: "stash apply --index [<stash>]" } ] },
]},
{ description : "", works : [
{ l: "st l", r: "st r", type: "hard", usages: [ { usage: "stash drop [<stash>]" }, { usage: "stash clear" } ] },
]},
{ description : "", works : [
{ l: "wd c", r: "sa r arrow", type: "safe", usages: [ { usage: "add    [<path>…]" }, { usage: "add -u [<path>…]" } ] },
]},
{ description : "", works : [
{ l: "sa c", r: "lr r arrow", type: "safe", usages: [ { usage: "commit [-v] [-m '<msg>']" }, { usage: "commit --amend" } ] },
]},
{ description : "", works : [
{ l: "lr c", r: "rr r arrow", type: "safe", usages: [ { usage: "push [<remote> [<tracking branch>[:(<upstream branch>|@{u})]]]" } ] },
]},
{ description : "", works : [
{ l: "wd c", r: "lr r arrow", type: "safe", usages: [ { usage: "commit -a [-v] [-m '<msg>']" } ] },
]},
{ description : "", works : [
{ l: "wd l", r: "sa r arrow", type: "hard", usages: [ { usage: "rm [-f|--force] <path>…" } ] },
]},
{ description : "", works : [
{ l: "wd l", r: "wd r", type: "hard", usages: [ { usage: "clean [-n] <path>…" } ] },
{ l: "sa l", r: "sa r", type: "soft", usages: [ { usage: "rm --cached <path>…" } ] },
]},
{ description : "", works : [
{ l: "wd l", r: "sa r arrow", type: "hard", usages: [ { usage: "mv <src path> <dst path>" } ] },
]},
{ description : "", works : [
{ l: "sa l", r: "sa r", type: "info", usages: [ { usage: "ls-files -s" } ] },
{ l: "lr l", r: "lr r", type: "info", usages: [ { usage: "cat-file -p HEAD" }, { usage: "ls-tree  -r HEAD" } ] },
]},
{ description : "", works : [
{ l: "sa l arrow", r: "sa r", type: "soft", usages: [ { usage: "reset [--mixed] [<commit>]  <path>…" }, { usage: "reset  --patch  [<commit>] [<path>…]" } ] },
]},
{ description : "", works : [
{ l: "sa l arrow", r: "lr c", type: "soft", usages: [ { usage: "reset [--mixed] [<commit>]" } ] },
]},
{ description : "", works : [
{ l: "sa c arrow", r: "lr c", type: "meta", usages: [ { usage: "reset --soft [<commit>]" } ] },
]},
{ description : "", works : [
{ l: "wd l arrow", r: "lr c", type: "hard", usages: [ { usage: "reset --hard [<commit>]" } ] },
]},
{ description : "", works : [
{ l: "wd l arrow", r: "sa r", type: "hard", usages: [ { usage: "checkout          <path>…" }, { usage: "checkout --patch [<path>…]" } ] },
]},
{ description : "", works : [
{ l: "lr l", r: "lr r", type: "info", usages: [ { usage: "branch [-vv] [--[no-]merged [<commit>]]" } ] },
]},
{ description : "", works : [
{ l: "lr l", r: "lr r", type: "meta", usages: [ { usage: "branch <new branch>" } ] },
]},
{ description : "", works : [
{ l: "lr l", r: "lr r", type: "meta", usages: [ { usage: "branch -d <merged branch>" } ] },
]},
{ description : "", works : [
{ l: "lr l", r: "lr r", type: "meta", usages: [ { usage: "branch --track <tracking branch> <remote>/<upstream branch>" }, { usage: "branch -u <remote>/<upstream branch>" } ] },
]},
{ description : "", works : [
{ l: "st l", r: "lr c arrow", type: "soft", usages: [ { usage: "stash branch <new branch> [<stash>]" } ] },
{ l: "lr c", r: "rr c arrow", type: "meta", usages: [ { usage: "branch (-d|--delete) <remote> <upstream branch>" } ] },
]},
{ description : "", works : [
{ l: "wd l arrow", r: "lr r", type: "soft", usages: [ { usage: "checkout -b <new branch>" } ] },
]},
{ description : "", works : [
{ l: "wd l arrow", r: "lr c", type: "soft", usages: [ { usage: "checkout <branch>" } ] },
]},
{ description : "", works : [
{ l: "wd l arrow", r: "lr r", type: "soft", usages: [ { usage: "merge <commit>…" } ] },
]},
{ description : "", works : [
{ l: "wd l arrow", r: "lr c", type: "hard", usages: [ { usage: "rebase [--onto <new base branch>] <base branch> [<topic branch>]" } ] },
]},
{ description : "", works : [
{ l: "wd l arrow", r: "lr c", type: "hard", usages: [ { usage: "cherry-pick <commit>" } ] },
]},
{ description : "", works : [
{ l: "wd l arrow", r: "lr c", type: "hard", usages: [ { usage: "revert <commit>" } ] },
]},
{ description : "", works : [
{ l: "lr l", r: "lr r", type: "info", usages: [ { usage: "tag" }, { usage: "tag -l <pattern>…​" } ] },
]},
{ description : "", works : [
{ l: "lr l", r: "lr r", type: "meta", usages: [ { usage: "tag -a [-m <msg>] <tagname> [<commit>]" }, { usage: "tag               <tagname> [<commit>]" } ] },
]},
{ description : "", works : [
{ l: "lr l", r: "lr r", type: "meta", usages: [ { usage: "tag -d <tagname>…" } ] },
]},
{ description : "", works : [
{ l: "lr c", r: "rr c arrow", type: "meta", usages: [ { usage: "push        <remote> <tagname>" }, { usage: "push --tags <remote>" } ] },
]},







/*
{ description : "", works : [
]},
*/



	]
};





var gitdoc = {
	
	baseurl : "https://git-scm.com/docs",
	
	path : {
		"git" : "git",
		"config" : "git-config",
		"help" : "git-help",
		"init" : "git-init",
		"clone" : "git-clone",
		"add" : "git-add",
		"status" : "git-status",
		"diff" : "git-diff",
		"commit" : "git-commit",
		"reset" : "git-reset",
		"rm" : "git-rm",
		"mv" : "git-mv",
		"branch" : "git-branch",
		"checkout" : "git-checkout",
		"merge" : "git-merge",
		"mergetool" : "git-mergetool",
		"log" : "git-log",
		"stash" : "git-stash",
		"tag" : "git-tag",
		"fetch" : "git-fetch",
		"pull" : "git-pull",
		"push" : "git-push",
		"remote" : "git-remote",
		"submodule" : "git-submodule",
		"show" : "git-show",
		"log" : "git-log",
		"diff" : "git-diff",
		"shortlog" : "git-shortlog",
		"describe" : "git-describe",
		"apply" : "git-apply",
		"cherry-pick" : "git-cherry-pick",
		"diff" : "git-diff",
		"rebase" : "git-rebase",
		"revert" : "git-revert",
		"bisect" : "git-bisect",
		"blame" : "git-blame",
		"grep" : "git-grep",
		"am" : "git-am",
		"apply" : "git-apply",
		"format-patch" : "git-format-patch",
		"send-email" : "git-send-email",
		"request-pull" : "git-request-pull",
		"svn" : "git-svn",
		"fast-import" : "git-fast-import",
		"daemon" : "git-daemon",
		"update-server-info" : "git-update-server-info",
		"gitattributes" : "gitattributes",
		"everyday" : "giteveryday",
		"glossary" : "gitglossary",
		"gitignore" : "gitignore",
		"gitmodules" : "gitmodules",
		"revisions" : "gitrevisions",
		"tutorial" : "gittutorial",
		"workflows" : "gitworkflows",
		"clean" : "git-clean",
		"gc" : "git-gc",
		"fsck" : "git-fsck",
		"reflog" : "git-reflog",
		"filter-branch" : "git-filter-branch",
		"instaweb" : "git-instaweb",
		"archive" : "git-archive",
		"bundle" : "git-bundle",
		"cat-file" : "git-cat-file",
		"check-ignore" : "git-check-ignore",
		"commit-tree" : "git-commit-tree",
		"count-objects" : "git-count-objects",
		"diff-index" : "git-diff-index",
		"for-each-ref" : "git-for-each-ref",
		"hash-object" : "git-hash-object",
		"ls-files" : "git-ls-files",
		"merge-base" : "git-merge-base",
		"read-tree" : "git-read-tree",
		"rev-list" : "git-rev-list",
		"rev-parse" : "git-rev-parse",
		"show-ref" : "git-show-ref",
		"symbolic-ref" : "git-symbolic-ref",
		"update-index" : "git-update-index",
		"update-ref" : "git-update-ref",
		"verify-pack" : "git-verify-pack",
		"write-tree" : "git-write-tree"
	}
};



