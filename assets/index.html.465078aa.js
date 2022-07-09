import{_ as e,o as i,c as n,e as d}from"./app.2e625de2.js";const a={},l=d(`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> git</h1><h2 id="git-config" tabindex="-1"><a class="header-anchor" href="#git-config" aria-hidden="true">#</a> git config</h2><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>$ git config --global -e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-Plain ext-Plain line-numbers-mode"><pre class="language-Plain"><code>[alias]
	lo = log --all --graph --oneline
[user]
	email = xxx@xxx.com
	name = xxx
[core]
	editor = code --wait
[diff]
    tool = default-difftool
[difftool &quot;default-difftool&quot;]
    cmd = code --wait --diff $LOCAL $REMOTE
[merge]
	tool = vscode
[mergetool &quot;vscode&quot;]
	cmd = &quot;code --wait &quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),s=[l];function c(t,o){return i(),n("div",null,s)}var v=e(a,[["render",c],["__file","index.html.vue"]]);export{v as default};
