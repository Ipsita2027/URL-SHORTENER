const cookieConfig={
    secure:process.env.NODE_ENV==="production",
    sameSite:"lax",
    httpOnly:true,
    maxAge:1000*60*60

}

export default cookieConfig;