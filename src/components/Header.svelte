<script>
    let username = "test";
    let password = "test";

</script>

<header>
    <div class="row">
        <div class="column cropped left">
            <img
                src="https://mitwpu.edu.in/sites/mitwpu.edu.in/theme/images/icons/android-chrome-192x192.png"
                alt="logo"
                id="left"
            />
        </div>
        <div class="column middle">
            <br /><br /><br /><br />
            <b>MITWPU SY B.Tech Panel H</b>
        </div>
        <div class="column right">
            <p>Login (not functional)</p>
            <input value = "test" placeholder="Enter Username..."/>
            <input placeholder="Enter Password..."/>
        </div>
    </div>
</header>

<style>
    .row {
        display: flex;
    }

    .column {
        float: left;
        border: solid black;
        height: 150px;
    }
    .left {
        width: 25%;
    }
    .middle {
        width: 50%;
    }

    .right {
        width: 25%;
    }
    .cropped {
        height: 150px;
        overflow: hidden;
    }
    img {
        max-width: 100%;
        max-height: 100%;
    }
    header {
        background: #f7f7f7;
    }
    #left {
        float: left;
    }
    b {
        font-size: 32px;
        color: #150d5fe5;
        margin-left: 20px;
    }
    input {
        width: 80%;
        margin: 10px;
        box-sizing: border-box;
        transition: width 0.4s ease-in-out;
    }

    p {
        margin: 10px 15px;
    }
</style>
