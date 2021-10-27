import React from 'react'

export default function TpoContent() {
    const router = useRouter();
    const {tpoContentType=[]} = router.query;
    console.log(tpoContentType);
    return (
        <div>
            Tpo - content
        </div>
    )
}
