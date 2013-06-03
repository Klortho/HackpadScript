// Greasemonkey script to add a some links to Hackpad
// To text and HTML files, e.g.:
//   https://hackpad.com/ep/pad/export/tq56fI63mz3/latest?format=txt
//   https://hackpad.com/ep/pad/export/tq56fI63mz3/latest?format=html
//
// ==UserScript==
// @name          HackpadScript
// @namespace     HackpadScript
// @version       1.0.1
// @description   Greasemonkey script to add a some links to Hackpad
// @include       https://hackpad.com/*
// ==/UserScript==



// the guts of this userscript
(function main() {

    var loc = document.location;
    var hash = loc.toString().match('[a-zA-Z0-9]{11,11}$');
    if (!hash) return;

    var sidebarDiv = document.getElementById('padsidebar');
    var tocDiv = document.getElementById('toc-div');
    if (!sidebarDiv || !tocDiv) return;
    var tocNext = tocDiv.nextElementSibling;

    var linksDiv = document.createElement('div');
    linksDiv.setAttribute('id', 'links-div');
    linksDiv.setAttribute('class', 'sidebar-div');
    linksDiv.setAttribute('style', 'display: block');

    var linksHead = document.createElement('div');
    linksHead.setAttribute('class', 'sidebarheading');
    linksHead.setAttribute('style', 'margin-bottom:0px;');
    linksHead.appendChild(document.createTextNode('Export'));
    linksDiv.appendChild(linksHead);

    var linksNote = document.createElement('div');
    linksNote.setAttribute('style', 'margin-bottom:0px;');
    linksNote.appendChild(document.createTextNode('For these to work, open in a new tab'));
    linksDiv.appendChild(linksNote);

    var linksUl = document.createElement('ul');
    linksUl.setAttribute('style',
                         'list-style-position: inside; white-space: nowrap; list-style-type: none;');

    var linkLi1 = document.createElement('li');
    linkLi1.setAttribute('class', 'toc-entry');
    linkLi1.setAttribute('style', 'color: #666');
    var linkA1 = document.createElement('a');
    linkA1.setAttribute('href', 'https://hackpad.com/ep/pad/export/' + hash + '/latest?format=txt');
    linkA1.appendChild(document.createTextNode('Download as text'));
    linkLi1.appendChild(linkA1);
    linksUl.appendChild(linkLi1);

    var linkLi2 = document.createElement('li');
    linkLi2.setAttribute('class', 'toc-entry');
    var linkA2 = document.createElement('a');
    linkA2.setAttribute('href', 'https://hackpad.com/ep/pad/export/' + hash + '/latest?format=html');
    linkA2.appendChild(document.createTextNode('Download as HTML'));
    linkLi2.appendChild(linkA2);
    linksUl.appendChild(linkLi2);


    linksDiv.appendChild(linksUl);

    sidebarDiv.insertBefore(linksDiv, tocNext);

})();
