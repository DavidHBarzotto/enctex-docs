# Licensing

EnCteX programs use a key-based licence bound to the machine. Validation is
done on a server, with a grace period for working offline.

## Activation { #ativacao }

On first launch the program asks for the licence key. Paste the key you
received with your purchase and confirm.

What happens at that moment:

1. The key is validated on the licence server.
2. The machine is **registered** to the licence through a fingerprint of the
   hardware.
3. The key and the validation date are stored in the Windows user settings.

From then on the program opens without asking for anything, revalidating in
the background.

!!! warning "One licence, one machine"

    Each licence has a limit of registered machines. If you try to activate on
    a computer beyond that limit, the registration is refused. To move to a new
    machine, see [Changing machines](#troca-de-equipamento).

## Licence types { #tipos-de-licenca }

| Type | How it behaves |
| :-- | :-- |
| **Perpetual** | Does not expire. Remains valid indefinitely on the registered machine. |
| **Monthly** | Has an expiry date. It must be renewed for the program to keep opening. |

The program tells them apart by whether there is an expiry date: a licence
with no date is perpetual. The type is shown on the licence screen inside the
program.

## Working offline { #trabalho-sem-internet }

The program **does not require a permanent connection**. Once the machine has
validated the licence at least once, there is a **7-day** grace period of use
without contacting the server.

The behaviour is as follows:

| Situation | What happens |
| :-- | :-- |
| Server replies that the licence is valid | Opens normally and renews the validation stamp |
| No internet, validated less than 7 days ago | Opens normally, within the grace period |
| No internet, validated more than 7 days ago | Does not open; connect to revalidate |
| No internet and **never** validated on this machine | Does not open; the first activation requires internet |
| Monthly licence past its expiry date | Does not open, even within the grace period |
| Server replies that the licence is no longer valid | Does not open; the stored licence is discarded |

!!! note "A network failure does not cancel a licence"

    There is a deliberate distinction between *"the server said the licence is
    invalid"* and *"I could not reach the server"*. Only the first case deletes
    the stored licence. An internet outage, a corporate firewall or a trip
    never make the program forget that you have a licence — they only use up
    the grace period.

On site with no signal, then: open the program while connected before you
leave, and you have a week of autonomy.

## Changing machines { #troca-de-equipamento }

Moving to a new computer requires releasing the old machine's registration,
because the limit is per registered machine, not per installation.

Get in touch through [enctex.com.br](https://enctex.com.br) with your licence
key and the reason. The old registration is removed and the key can be
activated again.

!!! tip "Before formatting"

    Ask for the release **before** formatting or disposing of the machine.
    Afterwards, the computer can no longer present itself to the server to be
    deregistered on its own, and the release then depends on support.

## Frequently asked questions { #perguntas-frequentes }

??? question "Can I install it at home and at the office?"

    It depends on your licence's machine limit. Individual licences usually
    allow one computer. Contact EnCteX for licences covering more than one
    machine.

??? question "Does reinstalling Windows require a new activation?"

    Yes. The hardware fingerprint changes when the system is reinstalled, and
    the previous registration needs to be released.

??? question "Does the SPX licence work for PCX?"

    No. Each product has its own licence — keys are issued per product and are
    not interchangeable.

??? question "What happens when a monthly licence expires in the middle of a project?"

    The program stops opening, but **no file is lost**: projects, DXF files and
    reports already saved remain on disk and open normally after renewal.
