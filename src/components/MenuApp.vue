<script setup lang="ts">
import "../assets/_variables.scss"
</script>

<template>

            <div id="menu" class="menu">
                <div class="icons-container">

                    <a href="#" class='link bg-hover'>
                        <i class="google-icons avatar-icon"></i>
                        <span>Account</span>

                    </a>

                    <a href="#" class='link bg-hover'>
                        <i class="google-icons search-icon"></i>
                        <span>Search</span>
                    </a>

                    <a href="#" class='link bg-hover'>
                        <i class="google-icons maps-icon"></i>
                        <span>Maps</span>
                    </a>

                    <a href="#" class='link bg-hover'>
                        <i class="google-icons youtube-icon"></i>
                        <span>YouTube</span>
                    </a>

                    <a href="#" class='link bg-hover'>
                        <i class="google-icons play-icon"></i>
                        <span>Play</span>
                    </a>

                    <a href="#" class='link bg-hover'>
                        <i class="google-icons news-icon"></i>
                        <span>News</span>
                    </a>

                    <a href="#" class='link bg-hover'>
                        <i class="google-icons gmail-icon"></i>
                        <span>Gmail</span>
                    </a>

                    <a href="#" class='link bg-hover'>
                        <i class="google-icons meet-icon"></i>
                        <span>Meet</span>
                    </a>

                    <a href="#" class='link bg-hover'>
                        <i class="google-icons contacts-icon"></i>
                        <span>Contacts</span>
                    </a>

                    <a href="#" class='link bg-hover'>
                        <i class="google-icons drive-icon"></i>
                        <span>Drive</span>
                    </a>

                    <a href="#" class='link bg-hover'>
                        <i class="google-icons calendar-icon"></i>
                        <span>Calendar</span>
                    </a>

                    <a href="#" class='link bg-hover'>
                        <i class="google-icons translator-icon"></i>
                        <span>Translator</span>
                    </a>

                    <a href="#" class='link bg-hover'>
                        <i class="google-icons photos-icon"></i>
                        <span>Photos</span>
                    </a>

                    <a href="#" class='link bg-hover'>
                        <i class="google-icons duo-icon"></i>
                        <span>Duo</span>
                    </a>

                    <a href="#" class='link bg-hover'>
                        <i class="google-icons chrome-icon"></i>
                        <span>Chrome</span>
                    </a>

                    <a href="#" class='link bg-hover'>
                        <i class="google-icons shopping-icon"></i>
                        <span>Shopping</span>
                    </a>
                </div>

                <div class="divider"></div>

                <div class="icons-container">
                    <a href="#" class='link bg-hover'>
                        <i class="google-icons docs-icon"></i>
                        <span>Docs</span>
                    </a>

                    <a href="#" class='link bg-hover'>
                        <i class="google-icons sheets-icon"></i>
                        <span>Sheets</span>
                    </a>

                    <a href="#" class='link bg-hover'>
                        <i class="google-icons presentation-icon"></i>
                        <span>Presentations</span>
                    </a>

                    <a href="#" class='link bg-hover'>
                        <i class="google-icons books-icon"></i>
                        <span>Books</span>
                    </a>

                    <a href="#" class='link bg-hover'>
                        <i class="google-icons blogger-icon"></i>
                        <span>Blogger</span>
                    </a>

                    <a href="#" class='link bg-hover'>
                        <i class="google-icons hangout-icon"></i>
                        <span>Hangouts</span>
                    </a>

                    <a href="#" class='link bg-hover'>
                        <i class="google-icons keep-icon"></i>
                        <span>Keep</span>
                    </a>

                    <a href="#" class='link bg-hover'>
                        <i class="google-icons jamboard-icon"></i>
                        <span>Jamboard</span>
                    </a>

                    <a href="#" class='link bg-hover'>
                        <i class="google-icons earth-icon"></i>
                        <span>Earth</span>
                    </a>
                    <a href="#" class='link bg-hover'>
                        <i class="google-icons collections-icon"></i>
                        <span>Collections</span>
                    </a>
                    <a href="#" class='link bg-hover'>
                        <i class="google-icons art-culture-icon"></i>
                        <span>Art and culture</span>
                    </a>
                    <a href="#" class='link bg-hover'>
                        <i class="google-icons ads-icon"></i>
                        <span>Google Ads</span>
                    </a>
                    <a href="#" class='link bg-hover'>
                        <i class="google-icons podcasts-icon"></i>
                        <span>Podcasts</span>
                    </a>
                </div>

                <div class="more-btn-container">

                    <button class="more-btn pointer">More from Google</button>
                </div>
            </div>
    
</template>

<style scoped>
.clear-df-abbr {
    text-decoration: none;
}

.menu {
    width: var(--menu-width);
    height: var(--menu-height);
    background-color: white;
    overflow-y: scroll;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
        0 2px 6px 2px rgba(60, 64, 67, 0.15);
}

.menu-btn>svg {
    text-align: center;
    height: 48px;
    width: 48px;
    position: relative;
    display: block;
    color: #5f6368;
}

[data-is-closed="false"] .menu-btn:before {
    content: "";
    background-color: rgba(60, 64, 67, 0.2);
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: scale(1.5);
    display: block;
    z-index: -10;
}


[data-is-closed="true"] .menu {
    display: none;
}

.icons-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 1.5rem;
    padding: 20px 16px 20px 20px;
}

.divider {
    height: 1px;
    background-color: #e8eaed;
}

.link {
    height: 84px;
    width: 84px;

    text-decoration: none;
    color: initial;
    position: relative;
    text-align: center;
    display: inline-block;
    z-index: 10;
}

.link>span {
    white-space: nowrap;
    overflow: hidden;
    width: 76px;
    display: inline-block;
    text-overflow: ellipsis;
}

.bg-hover:hover:before {
    content: "";
    background-color: var(--hover-bg-color);
    border-radius: 8px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: scale(1.1);
    display: block;
    z-index: -10;
}

[data-is-closed="true"] .circle-hover:hover:before {
    content: "";
    background-color: rgba(60, 64, 67, 0.08);
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: scale(1.5);
    display: block;
    z-index: -10;
}

.bg-hover:hover:active:before {
    background-color: var(--active-bg-color);
}

.pointer {
    cursor: pointer;
}

.google-icons {
    display: inline-block;
    height: 64px;
    vertical-align: top;
    width: 64px;
    background-image: url("https://ssl.gstatic.com/gb/images/p1_799229b0.png");
    background-size: 64px 2962px;
}

.avatar-icon {
    background-position: 0 -2691px;
}

.search-icon {
    background-position: 0 -690px;
}

.gmail-icon {
    background-position: 0 -1449px;
}

.drive-icon {
    background-position: 0 -1380px;
}

.docs-icon {
    background-position: 0 -2622px;
}

.sheets-icon {
    background-position: 0 -276px;
}

.presentation-icon {
    background-position: 0 -1242px;
}

.calendar-icon {
    background-position: 0 -2829px;
}

.chat.icon {
    background-position: 0 -345px;
}

.meet-icon {
    background-position: 0 -2001px;
}

.sites-icon {
    background-position: 0 -621px;
}

.contacts-icon {
    background-position: 0 -1518px;
}

.discuss-icon {
    background-position: 0 -1104px;
}

.youtube-icon {
    background-position: 0 -1863px;
}

.play-icon {
    background-position: 0 -1035px;
}

.maps-icon {
    background-position: 0 -138px;
}

.news-icon {
    background-position: 0 -414px;
}

.photos-icon {
    background-position: 0 -2760px;
}

.translator-icon {
    background-position: 0 -828px;
}

.duo-icon {
    background-position: 0 -2346px;
}

.chrome-icon {
    background-position: 0 -1725px;
}

.books-icon {
    background-position: 0 -2415px;
}

.art-culture-icon {
    background-position: 0 -1173px;
}

.ads-icon {
    background-position: 0 -552px;
}

.blogger-icon {
    background-position: 0 -966px;
}

.shopping-icon {
    background-position: 0 -2208px;
}

.hangout-icon {
    background-position: 0 -1794px;
}

.keep-icon {
    background-position: 0 -897px;
}

.jamboard-icon {
    background-position: 0 -1932px;
}

.earth-icon {
    background-position: 0 -2277px;
}

.collections-icon {
    background-position: 0 -759px;
}

.podcasts-icon {
    background-position: 0 -1311px;
}

/* ----------------- MORE BUTTON -------------- */

.more-btn-container {
    text-align: center;
    position: relative;
}

.more-btn {
    width: 55%;
    background-color: white;
    border: 1px solid #dadce0;
    border-radius: 4px;
    color: #1a73e8;
    font: 500 14px/16px "Google Sans", Roboto, RobotoDraft, Helvetica, Arial,
        sans-serif;
    margin: 16px 0 20px 0;
    padding: 10px 24px;
}

.more-btn:hover {
    background-color: var(--hover-bg-color);
    border-color: var(--active-bg-color);
}

.more-btn:active {
    outline: 0;
    background-color: var(--active-bg-color);
}

.more-btn:focus {
    outline: 0;
}

.more-btn:focus:active {
    background-color: #ecf3fe;
    border-color: transparent;
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
        0 2px 6px 2px rgba(60, 64, 67, 0.15);
}

/* ----------------- SCROLLBAR -------------- */

::-webkit-scrollbar {
    width: 16px;
}

::-webkit-scrollbar-thumb {
    background: #dadce0;
    background-clip: padding-box;
    border: 4px solid transparent;
    border-radius: 8px;
    box-shadow: none;
    min-height: 50px;
}

::-webkit-scrollbar-track {
    background: none;
    border: none;
}



</style>