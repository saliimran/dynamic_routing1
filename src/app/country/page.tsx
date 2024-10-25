import Link from "next/link"

export default function Country(){
      return(
        <>
          
          <Link href="/country/india">INDIA</Link>&nbsp; | &nbsp;
          <Link href="/country/pakistan">PAKISTAN</Link>&nbsp; | &nbsp;  
          <Link href="/country/bangladesh">BANGLADESH</Link>&nbsp; | &nbsp;
          <Link href="/country/palestine">PALESTINE</Link>&nbsp; | &nbsp;
          <Link href="/country/iran">IRAN</Link>&nbsp; | &nbsp; 
          <Link href="/">Home</Link>
                                                   
        </>
      )
    }
    